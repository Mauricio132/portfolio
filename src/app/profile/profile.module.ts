import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';
import { ExtraInfoComponent } from './components/extra-info/extra-info.component';

@NgModule({
  declarations: [ImgCardComponent, ProfileComponent, AboutMeComponent, ExtraInfoComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
