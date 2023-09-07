import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '3000px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1000px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '800px',
      numVisible: 1,
      numScroll: 1,

    },
  ];

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
