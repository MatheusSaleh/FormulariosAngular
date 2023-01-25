import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "X-Salada", preco: "R$10,00"},
    {comida: "X-Bacon", preco: "R$12,00"},
    {comida: "Coxinha", preco: "R$14,00"}
  ];

  public submitForm(form: NgForm){
    console.log(form.value)
  }
}
