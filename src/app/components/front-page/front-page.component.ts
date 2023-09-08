import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, OverlayPanelModule],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  openUrl() {
    window.open('https://wa.me/3193029089', '_blank');
  }
}
