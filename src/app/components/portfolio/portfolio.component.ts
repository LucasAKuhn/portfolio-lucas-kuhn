import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  currentView: string = 'home';

  showGPU() {
    this.currentView = 'gpu';
  }

  showTISS() {
    this.currentView = 'tiss';
  }

  showHome() {
    this.currentView = 'home';
  }

}
