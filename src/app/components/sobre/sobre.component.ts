import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  downloadCv() {
    window.open('./assets/Curriculum-Lucas-Kuhn.pdf', '_blank');
  }

}
