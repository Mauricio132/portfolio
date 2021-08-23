import { Injectable } from '@angular/core';
import { Profile, Education, Skills } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  profile: Profile = {
    name: 'edison  negrete ',
    title: 'ing. sistemas computacionales',
    dateBirth: '29/09/1996',
    ci: '094253****',
    phone: '+593 97 890 0854',
    email: 'maunegretep@outlook.es',
    direction: 'ecuador, guayas, milagro',
    img: '../../../../assets/dist/img/photo-cv.PNG',
    nationality: 'Ecuatoriana',
  };

  education: Education[] = [
    {
      name: 'univerdad estatal de milagro',
      date: '2019 ',
      location: 'Ecuador, Guayas, Milagro',
      title: 'ingeniero en sistemas computacionales',
    },
    {
      name: 'colegio fiscal 17 de septiembre',
      date: '2014 ',
      location: 'Ecuador, Guayas, Milagro',
      title: 'administracion de sistemas',
    },
  ];

  skills: Skills[] = [
    { name: 'deseo de aprender' },
    { name: 'capacidad analítica' },
    { name: 'adaptabilidad' },
    { name: 'proactividad' },
    { name: 'creatividad' },
    { name: 'trabajo en equipo' },
    { name: 'actitud positiva' },
    { name: 'dedicación' },
    { name: 'honestidad e integridad' },
    { name: 'iniciativa' },
  ];

  getProfile(): Profile {
    return this.profile;
  }

  getEducation(): Education[] {
    return this.education;
  }

  getSkills(): Skills[] {
    return this.skills;
  }
}
