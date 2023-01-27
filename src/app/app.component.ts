import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deeplinks: Deeplinks,
    private router: Router,
    private zone: NgZone
  ) {
   /*  this.initializeApp(); */
  }
/*   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setupDeeplinks();
    });
  }

  setupDeeplinks() {
    this.deeplinks.route({
      '/:slug': 'posts',
      '/products/:id': ''
    }).subscribe(match => {
      console.log('Successfully matched route', match);

    //crie nosso caminho interno do roteador manualmente
      const internalPath = `/${match.$route}/${match.$args.slug}}`;

    //executar a navegação na zona angular
      this.zone.run(() => {
        this.router.navigateByUrl(internalPath);
      });
    },
    nomatch => {
      //nomatch.$link - os dados completos do link
      console.error('Tem um link direto que não corresponde', nomatch);
    }
    );
  } */
}
