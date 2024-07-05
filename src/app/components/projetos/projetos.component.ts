import { Component, ViewEncapsulation } from '@angular/core';
import { Projetos } from 'src/app/model/projetos';
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay, SwiperOptions } from 'swiper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';



SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetosComponent {

  faGithub = faGithub;
  faLaptopCode = faLaptopCode;


  config: SwiperOptions = {
    loopedSlides: 5,
    initialSlide: 0,
    spaceBetween: 10,
    navigation: true,
    centeredSlides: true,
    keyboard: {
      enabled: true
    },
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true
    },
    autoplay: false,
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      930: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  }

  projetos: Projetos[] = [
    {
      id: 1,
      nome: 'Portfólio',
      descricao: 'Utilizando Angular, criei um portfólio pessoal, onde apresento mais sobre mim.',
      img: './assets/portfolio.png',
      git: 'https://github.com/LucasAKuhn/portfolio-lucas-kuhn'
    },
    {
      id: 2,
      nome: 'Parking Control',
      descricao: 'Utilizando Java com Spring, criei um projeto que simula um controle de estacionamento.',
      img: './assets/parking-control.png',
      git: 'https://github.com/LucasAKuhn/Parking-control'
    },
    {
      id: 3,
      nome: 'Be the Hero',
      descricao: 'Construido com React / Node.JS, este projeto tem por objetivo conectar ONGs a pessoas que desejam ajudar.',
      img: './assets/be-the-hero.png',
      git: 'https://github.com/LucasAKuhn/Be-The-Hero--Semana-Omnistack-11'
    },
  ];

  constructor() { }



}
