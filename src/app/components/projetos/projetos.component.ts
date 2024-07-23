import { Component, ViewEncapsulation } from '@angular/core';
import { Projetos } from 'src/app/model/projetos';
import { ProjetosProf } from 'src/app/model/projetos-prof';
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay, SwiperOptions } from 'swiper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";



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
      // img: './assets/portfolio.png',
      img: './dist/portfolio-lucas-kuhn/assets/portfolio.png',
      git: 'https://github.com/LucasAKuhn/portfolio-lucas-kuhn',
      gitPage: 'https://lucasakuhn.github.io/portfolio-lucas-kuhn/'
    },
    {
      id: 2,
      nome: 'Parking Control',
      descricao: 'Utilizando Java com Spring, criei um projeto que simula um controle de estacionamento.',
      // img: './assets/parking-control.png',
      img: './dist/portfolio-lucas-kuhn/assets/parking-control.png',
      git: 'https://github.com/LucasAKuhn/Parking-control'
    },
    {
      id: 3,
      nome: 'Be the Hero',
      descricao: 'Construido com React / Node.JS, este projeto tem por objetivo conectar ONGs a pessoas que desejam ajudar.',
      // img: './assets/be-the-hero.png',
      img: './dist/portfolio-lucas-kuhn/assets/be-the-hero.png',
      git: 'https://github.com/LucasAKuhn/Be-The-Hero--Semana-Omnistack-11'
    },
    {
      id: 4,
      nome: 'Jogo da Velha#',
      descricao: 'Com Angular, recriei o tradicional jogo da velha. ',
      // img: './assets/jogo-da-velha.png',
      img: './dist/portfolio-lucas-kuhn/assets/jogo-da-velha.png',
      git: 'https://github.com/LucasAKuhn/jogo-da-velha',
      gitPage: 'https://lucasakuhn.github.io/jogo-da-velha/'
    },
    {
      id: 5,
      nome: 'History Quiz',
      descricao: 'Divirta-se enquanto testa seus conhecimentos em História, em um jogo eletrizante',
      // img: './assets/historyQuiz.png',
      img: './dist/portfolio-lucas-kuhn/assets/historyQuiz.png',
      git: 'https://github.com/LucasAKuhn/historyQuiz',
      gitPage: 'https://lucasakuhn.github.io/historyQuiz/'
    },
  ];

  projetosProf: ProjetosProf[] = [
    {
      id: 1,
      nome: 'Portfólio',
      descricao: 'Utilizando Angular, criei um portfólio pessoal, onde apresento mais sobre mim.',
      // img: './assets/portfolio.png',
      img: './dist/portfolio-lucas-kuhn/assets/portfolio.png',
      url: 'https://github.com/LucasAKuhn/portfolio-lucas-kuhn',
    }
];

  constructor(
    private router: Router
  ) {
  }


  goGPU() {
    window.open('/gpu', '_blank');
  }

  goTISS() {
    window.open('/tiss', '_blank');
  }


}
