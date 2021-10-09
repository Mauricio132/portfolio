import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { mapboxToken } from 'src/environments/environment';

interface MarcadorColor {
  name?: string;
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marker-maps',
  templateUrl: './marker-maps.component.html',
  styleUrls: ['./marker-maps.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkerMapsComponent implements OnInit, AfterViewInit {
  titleHeader: string = 'Maps Marker';

  @ViewChild('mapa') divMapa!: ElementRef;
  @ViewChild('txtMarker') inputMarker!: ElementRef<HTMLInputElement>;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-78.469739, -0.174947];
  //editar elemto
  btnMarker: boolean = true;
  id: number = 0;

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  //geocoder
  geocoder!: MapboxGeocoder;

  constructor() {
    //(mapboxgl as any).accessToken = mapboxToken;
  }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = mapboxToken;
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    //create control search
    this.geocoder = new MapboxGeocoder({
      accessToken: mapboxToken,
      placeholder: 'Buscar en Mapa',
      marker: false,
    });

    // Add the control to the map search.
    this.mapa.addControl(this.geocoder, 'top-left');

    this.leerLocalStorage();

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo';

    // new mapboxgl.Marker()
    //   .setLngLat( this.center )
    //   .addTo( this.mapa );
  }

  getName(): string {
    if (this.inputMarker.nativeElement.value === '') {
      return 'Marker ' + (this.marcadores.length + 1);
    }
    return this.inputMarker.nativeElement.value;
  }

  agregarMarcador() {
    //actualizando nombre
    if (this.btnMarker === false) {
      this.marcadores[this.id].name = this.inputMarker.nativeElement.value;
      this.guardarMarcadoresLocalStorage();
      this.btnMarker = true;
      return;
    }

    console.log('add');
    const name: string = this.getName();

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.mapa.getCenter())
      .addTo(this.mapa);

    this.marcadores.push({
      name,
      color,
      marker: nuevoMarcador,
    });

    this.guardarMarcadoresLocalStorage();

    //cuando el marcador se termina de mover
    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    });
  }

  irMarcador(marker: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat(),
    });
  }

  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        name: m.name,
        color: color,
        centro: [lng, lat],
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerLocalStorage() {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color,
        name: m.name,
      });

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);
    this.guardarMarcadoresLocalStorage();
  }

  editarMarcador(i: number) {
    this.inputMarker.nativeElement.value = this.marcadores[i].name!;
    this.id = i;
    this.btnMarker = false;
  }
}
