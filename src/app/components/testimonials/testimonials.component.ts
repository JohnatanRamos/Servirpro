import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  EffectCoverflow,
} from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    scrollbar: { draggable: true },
    breakpoints: {
      582: {
        slidesPerView: 3,
      },
    },
  };

  nameImages = [
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2044.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2045.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2046.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2047.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2048.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2049.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2050.webp',
  ];
}
