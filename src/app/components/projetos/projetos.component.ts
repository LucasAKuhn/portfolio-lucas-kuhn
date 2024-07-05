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
      nome: 'Weather App',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 2,
      nome: 'TESTE',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 3,
      nome: 'TESTE 3',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 4,
      nome: 'TESTE4',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 5,
      nome: '5',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 6,
      nome: 'TESTE6',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 7,
      nome: 'TESTE7',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 8,
      nome: 'TESTE8',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
    {
      id: 9,
      nome: 'TESTE9',
      descricao: 'Aplicación para consultar el clima de diferentes ciudades.',
      img: './assets/calculadora.png',
    },
  ];

  constructor() { }



}
