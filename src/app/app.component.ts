import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Equipe de France';
  message: String;
  isEditable: boolean;

  constructor() {
    this.message = `Ici postez votre message d'encouragement pour l'équipe de france`;
    this.isEditable = true;
  }
  public changeStyle() {
    this.isEditable = !this.isEditable;

}
}
