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

}
