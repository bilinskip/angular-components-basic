import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showForm = false;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
