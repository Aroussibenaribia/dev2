import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titre : string = "demo";
  status : boolean = true;

  nom : string ="aroussi ben aribia";

  constructor() { }

  ngOnInit(): void {
  }
  changertitre(){
    this.titre="nouveau titre";
  }


}
