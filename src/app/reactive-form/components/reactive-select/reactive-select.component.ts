import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { CountrySmall } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.css'],
})
export class ReactiveSelectComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: [''],
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: CountrySmall[] = [];
  fronteras: CountrySmall[] = [];

  //
  btnDisabled: boolean = true;

  constructor(private fb: FormBuilder, private paisesService: CountryService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la region
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
          this.paises = [];
        }),
        switchMap((region) => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe((paises) => {
        this.paises = paises;
      });

    // Cuando cambia el país
    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap(() => {
          this.miFormulario.get('frontera')?.reset('');
          this.fronteras = [];
        }),
        switchMap((codigo) => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap((pais) =>
          this.paisesService.getPaisesPorCodigos(pais?.borders!)
        )
      )
      .subscribe((paises) => {
        // this.fronteras = pais?.borders || [];
        this.fronteras = paises;
        paises.length === 0
          ? this.miFormulario.get('frontera')?.clearValidators()
          : this.miFormulario
              .get('frontera')
              ?.setValidators(Validators.required);

        this.miFormulario.get('frontera')?.updateValueAndValidity();
      });

    this.miFormulario.valueChanges.subscribe(() => {
      this.btnDisabled = !this.miFormulario.valid;
    });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
