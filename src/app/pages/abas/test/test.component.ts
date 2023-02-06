/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
  MyLocation,
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Util } from '../../../core/util.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { haversineDistance } from 'haversine-distance';
import { OverlayService } from '../../../core/service/overlay.service';
import { getDistance } from 'geolib';

declare let google: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  service = new google.maps.DistanceMatrixService();
  origem: any;
  destino: any;
  map: any;
  waypoints: any;
  position: any;
  mapa_carregado = false;

  locais: Agenda[] = [
    {
      nome: 'Teste 1',
      endereco: 'B',
      latitude: -8.752294744030344,
      longitude: -63.88957875133141,
    },
    {
      nome: 'Teste 2',
      endereco: 'C',
      latitude: -8.766418874841028,
      longitude: -63.88170378567325,
    },
    {
      nome: 'Bar do ceara',
      endereco: 'E',
      latitude: -8.740660359021602,
      longitude: -63.8599893573419,
    },
    {
      nome: 'Casa do matheus',
      endereco: 'I',
      latitude: -8.75665200687633,
      longitude: -63.89213927159537,
    },
    {
      nome: 'Casa do Leandro',
      endereco: 'D',
      latitude: -8.741787630148028,
      longitude: -63.867420248762194,
    },
    {
      nome: 'Chapa burges',
      endereco: 'F',
      latitude: -8.775834745260122,
      longitude: -63.86233721575813,
    },
    {
      nome: 'Tio mazinho',
      endereco: 'G',
      latitude: -8.777408436388495,
      longitude: -63.878276929265894,
    },
    {
      nome: 'Minha casa',
      endereco: 'H',
      latitude: -8.795407919988488,
      longitude: -63.880500991403956,
    },
  ];

  constructor(
    private platform: Platform,
    public overlay: OverlayService,
    private geolocation: Geolocation
  ) {
    console.log(google);
  }

  ngOnInit() {
    this.overlay.showLoading('Carregando o mapa e suas rotas ...');
    try {
      this.platform.ready().then(() => {
        this.geolocation
          .getCurrentPosition()
          .then((result) => {
            this.carregarMapa(result.coords.latitude, result.coords.longitude);
            console.log(
              'latitude e longitude atual',
              result.coords.latitude,
              result.coords.longitude
            );
          })
          .catch((e) => {
            console.log('erro ao pegar a localozação');
            Util.TratarErro(e);
          });
      });
    } catch (error) {
      Util.TratarErro(error);
    }
  }

  async carregarMapa(lat, lng) {
    try {
      const mapOptions = {
        center: this.origem,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };
      const element = document.getElementById('map');
      this.map = new google.maps.Map(element, mapOptions);
      this.directionsRenderer.setMap(this.map);

      this.carregaMarcadores(lat, lng);
      this.traçarRotas();
      try {
        google.maps.event.addListener(this.map, 'tilesloaded', () => {
          this.overlay.dismissLoadCtrl();
          this.mapa_carregado = true;
          google.maps.event.clearListeners(this.map, 'tilesloaded');
        });
      } catch (e) {
      }
    } catch (error) {
      Util.TratarErro(error);
    }
  }

  async carregaMarcadores(Lat, Lng) {
    this.waypoints = [];
    try {
      for (const key of Object.keys(this.locais)) {
        const latLng = new google.maps.LatLng(
          this.locais[key].latitude,
          this.locais[key].longitude
        );
        const markers = new google.maps.Marker({
          position: latLng,
          title: this.locais[key].nome,
        });

        markers.setMap(this.map);
        return this.waypoints;
      }
    } catch (e) {
      for (const key of Object.keys(this.locais)) {
        const latLng = new google.maps.LatLng(
          this.locais[key].latitude,
          this.locais[key].longitude
        );
        const markers = new google.maps.Marker({
          position: latLng,
          title: this.locais[key].nome,
        });

        markers.setMap(this.map);
        return this.waypoints;
      }
      Util.TratarErro(e);
    }
  }

  async traçarRotas() {
    try {
      const simboloDaLinha = {
        path: 'M 1.5 1 L 1 0 L 1 2 M 0.5 1 L 1 0',
        fillColor: '#000000',
        strokeColor: '#000000',
        strokeWeight: 2,
        strokeOpacity: 1.3,
        fillOpacity: 1.3,
        scale: 4,
      };
      const polilinha = {
        strokeColor: '#356196',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillOpacity: 1,
        draggable: false,
        icons: [
          {
            icon: simboloDaLinha,
            offset: '25',
            repeat: '100px',
          },
        ],
      };

      const rendererOptions = {
        map: this.map,
        suppressMarkers: false,
        polylineOptions: polilinha,
      };
      const directionsDisplay = new google.maps.DirectionsRenderer(
        rendererOptions
      );

      const request = {
        origin: this.origem,
        destination: this.destino,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: this.waypoints,
        optimizeWaypoints: true,
      };
      this.directionsService.route(request, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    } catch (error) {
      Util.TratarErro(error);
    }
  }

  calcDistancia(latitude1, Longitude1, latitude2, Longitude2) {
    const distance = getDistance(
      { latitude: latitude1, longitude: Longitude1 },
      { latitude: latitude2, longitude: Longitude2 }
    );
    console.log(distance);
  }
}

export class Agenda {
  nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
}
