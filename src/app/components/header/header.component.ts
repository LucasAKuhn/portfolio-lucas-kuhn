import { AfterViewInit, Component } from '@angular/core';
import {Router} from "@angular/router";
import {PortfolioComponent} from "../portfolio/portfolio.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor(
    private appComponent: PortfolioComponent
  ) {
  }
  ngAfterViewInit() {
    document.querySelectorAll('.nav-item').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  goHome() {
    this.appComponent.showHome();
  }


}
