import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;

  downloadCv() {
    // window.open('./assets/Curriculum-Lucas-Kuhn.pdf', '_blank');
    window.open('./dist/portfolio-lucas-kuhn/assets/Curriculum-Lucas-Kuhn.pdf', '_blank');
  }

}
