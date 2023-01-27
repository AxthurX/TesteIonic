/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, Observable, of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { AngularFireUploadTask } from '@angular/fire/compat/storage/task';
import { Util } from '../util.model';

export interface FileFotoModel {
  tabela: number;
  index?: number;
  //registro da tabela
  id_registro: number;
  nosso_id: string;
  base64: string;
  nome_arquivo: string;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  percentage_ionic: Observable<number>;
  uploading: Observable<boolean>;
  finishid: Observable<boolean>;
  paused: Observable<boolean>;
  error: Observable<boolean>;
  canceled: Observable<boolean>;
  bytesuploaded: Observable<number>;
  state: Observable<string>;
}

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(
    public db: AngularFirestore,
    private storage: AngularFireStorage,
    private afs: AngularFirestore
  ) {}

  fillAttributes(f: FileFotoModel) {
    f.percentage = f.task.percentageChanges();
    f.percentage_ionic = f.task
      .percentageChanges()
      .pipe(map((prc) => prc / 100));
    f.uploading = f.state.pipe(map((s) => s === 'running'));
    f.finishid = from(f.task).pipe(map((s) => s.state === 'success'));
    f.paused = f.state.pipe(map((s) => s === 'paused'));
    f.error = f.state.pipe(map((s) => s === 'error'));
    f.canceled = f.state.pipe(map((s) => s === 'canceled'));
    f.bytesuploaded = f.task
      .snapshotChanges()
      .pipe(map((s) => s.bytesTransferred));
  }

  getObj(id: string): Observable<FotoModel> {
    return this.afs
      .collection<FotoModel>(`fotos-nossoerp`, (ref) =>
        ref.where('id', '==', id)
      )
      .valueChanges()
      .pipe(map((r) => r[0]));
  }

  getObjAux(id: string): Observable<FotoAuxModel> {
    return this.afs
      .collection<FotoAuxModel>('aplicacoes_gerenciais/auxiliar/tirarfoto')
      .doc(id)
      .valueChanges();
  }

  setFoto(f: FileFotoModel, concluiu: (id: string) => void) {
    const path = `nossoerp/fotos/${f.nome_arquivo}`;
    let ref = this.storage.ref(path);

    f.task = ref.putString(f.base64, 'data_url', { contentType: 'image/jpeg' });
    f.state = f.task.snapshotChanges().pipe(
      map((s) => f.task.task.snapshot.state),
      catchError((s) => of(f.task.task.snapshot.state))
    );
    this.fillAttributes(f);
    f.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          if (f.task.task.snapshot.state === 'success') {
            this.storage
              .ref(path)
              .getDownloadURL()
              .subscribe(
                (url_download) => {
                  const id = this.afs.createId();
                  this.afs.collection('fotos-nossoerp').doc(id).set({
                    nome_arquivo: f.nome_arquivo,
                    nosso_id: f.nosso_id,
                    tabela: f.tabela,
                    id_registro: f.id_registro,
                    url_download,
                    path_storage: path,
                    status: 0,
                    observacao: '',
                    id,
                    index: f.index,
                  });
                  concluiu(id);
                },
                (e) => {
                  console.error(e);
                  Util.AlertError(
                    `Erro ao pegar url do arquivo ${f.nome_arquivo}`
                  );
                }
              );
          }
        })
      )
      .subscribe();

    // ref.putString(file.base64, 'data_url', { contentType: 'image/jpeg' }).then(function (snapshot) {
    //   ref.getDownloadURL().subscribe((url) => setDadosArquivo(url, path));
    // });
  }
}

export class FotoModel {
  nome_arquivo: string;
  nosso_id: string;
  tabela: number;
  id_registro: number;
  url_download: string;
  path_storage: string;
  status: number;
  observacao: string;
}

export class FotoAuxModel {
  IdBancoDeDados: number;
  descricao: string;
  descricao_completa: string;
  NossoID: string;
  tabela: number;
  id_registro: number;
  index_foto?: number;
}
