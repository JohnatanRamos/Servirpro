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
  questions: {title: string; answer: string}[][] = [[
    {
      title: '¿Tienen oficina?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Sí, tenemos oficina en Medellín.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Está ubicada en la calle 8 #43 c-68 oficina 102</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Co-Work Latam Astorga</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Horario de atención:</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Lunes a viernes de 8:00 am a 12:30 pm y de 1:30 pm a 5:30 pm</span></p>"
    },
    
    {
      title: '¿En cuánto tiempo me realizan los trámites de afiliación?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Los trámites tardan de 24 a 48 horas hábiles aproximadamente, los puedes realizar directamente en nuestra oficina o a través de nuestro WhatsApp 319 302 9089</span></p>"
    },
    {
      title: '¿Me envían las planillas de pago?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Sí, tienes derecho a exigir tu planilla de pago cada mes, allí podrás verificar que los aportes se están haciendo correctamente.</span></p>"
    }
  ], [
    {
      title: '¿Cuánto debo pagar por la afiliación?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Para realizar la afiliación debes realizar un pago inicial de $40.000 y cuando recibas los certificados de afiliación debes pagar el resto del valor del paquete que adquiriste.&nbsp;</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Puedes consignar a nuestra Cuenta de Ahorros Bancolombia y enviarnos el comprobante, o puedes pagar en efectivo directamente en nuestra oficina.</span></p>"
    },
    
    {
      title: '¿En cuál EPS me afilian?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Tu afiliación se realiza en la misma EPS que tuviste por última vez.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">O si deseas traslado de EPS lo puedes solicitar, este proceso tarda de uno a dos meses y mientras aceptan el traslado, tu atención será en la EPS que tienes actualmente.</span></p>" 
    },
    
    {
      title: '¿A quiénes puedo incluir como beneficiarios?',
      answer: "<p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">En la EPS</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> puedes incluir a tus hijos, hijastros y pareja.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Si no tienes hijos, hijastros o pareja puedes incluir a tus padres.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">En la caja de compensación</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> puedes incluir hijos, hijastros, pareja y&nbsp;</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">padres.</span></p>"
    }
  ], [
    {
      title: '¿En cuánto tiempo inicia la cobertura? ¿Puedo pedir citas?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">En la mayoría de las EPS la cobertura inicia entre uno y tres días.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Si es la primera vez que te afilias a una EPS, la cobertura inicia entre uno y ocho días hábiles.</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">En la ARL la cobertura inicia al día siguiente de realizar la afiliación.</span></p>"
    },
    
    {
      title: '¿Me pagan incapacidades?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Sí, toda persona que sea cotizante a la EPS tiene derecho al pago de incapacidades por enfermedad general. (Para tener derecho al pago de la incapacidad debes haber cotizado como mínimo 30 días)</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Además, si cotizas a la ARL tienes derecho a pago de incapacidades en caso de accidente laboral de acuerdo a las normas de la ARL. La cobertura inicia&nbsp; a las 24 horas después de realizada la afiliación a la ARL.</span></p>"
    },

    {
      title: '¿Qué documentos debo enviar para la afiliación?',
      answer: "<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Solo debes enviarnos copia de tu cédula por ambos lados y datos personales (dirección, ciudad, teléfono, correo)</span></p><p><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">O si adquieres un paquete con caja de compensación deberás enviar otros documentos adicionales.</span></p>"
    }
  ]];

  openUrl() {
    window.open('https://wa.me/3193029089', '_blank');
  }
}
