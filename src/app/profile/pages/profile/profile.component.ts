import { Component, OnInit } from '@angular/core';
import { Profile, Skills, Education } from '../../interfaces/profile.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  titleHeader: string = 'Perfil';

  constructor(private ProfileService: ProfileService) {}

  ngOnInit(): void {}

  profile: Profile = this.ProfileService.getProfile();

  extraInfo: Skills[] = this.ProfileService.getSkills();

  education: Education[] = this.ProfileService.getEducation();
}
