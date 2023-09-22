import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-affiliation-process',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './affiliation-process.component.html',
  styleUrls: ['./affiliation-process.component.scss']
})
export class AffiliationProcessComponent {
  openUrl() {
    window.open('https://api.whatsapp.com/send?phone=3193029089&text=Hola,%20visit%C3%A9%20el%20sitio%20web%20y%20estoy%20interesado%20en%20afiliarme', '_blank');
  }
}
