import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404Component } from './components/error404/error404.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    Error404Component,
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Error404Component,
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
