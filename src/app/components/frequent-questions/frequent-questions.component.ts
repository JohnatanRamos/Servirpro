import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-frequent-questions',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, AccordionModule],
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss']
})
export class FrequentQuestionsComponent {
  questions = [{
    title: '¿En cuál EPS me afilian?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Me envían planillas de pago?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Tienen sede física?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Puedo pagar sin pensión?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Me puedo afiliar solo a EPS?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Me puedo afiliar solo a ARL?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Recibo subsidios por la caja?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Pagan incapacidades?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Qué documentos debo enviar para afiliarme a la Caja?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },{
    title: '¿Cuánto vale el servicio de afiliación?',
    answer: 'En la misma que siempre hayas tenido. Si nunca has tenido, puedes escoger tu EPS. Además, hacemos traslados si lo deseas. '
  },];
}
