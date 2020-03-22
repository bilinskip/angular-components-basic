import { Component} from '@angular/core';
import { Quotation } from '../models/quotation';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showForm = true;
  quotation: Quotation ={author: '', sentence: '', votes: 0};
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
   addQuotation(){
    this.quotation = {author: '', sentence: '', votes: 0};
  }

}