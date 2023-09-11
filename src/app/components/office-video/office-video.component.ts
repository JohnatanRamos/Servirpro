import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  EffectCoverflow,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-office-video',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './office-video.component.html',
  styleUrls: ['./office-video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OfficeVideoComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  nameImages = [
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/office.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_2.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_3.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_4.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_5.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_6.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_7.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_8.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_9.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/Servirpro/IMG_10.webp',
  ];
}
