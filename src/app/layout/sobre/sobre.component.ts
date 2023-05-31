import { Component, Input, ViewChild } from '@angular/core';
import { SobreItemComponent } from 'src/app/sobre-item/sobre-item.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  @ViewChild(SobreItemComponent) sobre!: SobreItemComponent;

}
