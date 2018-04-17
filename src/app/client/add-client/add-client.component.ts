import { Component, OnInit } from '@angular/core';
import { ClientViewModel } from '../client.viewmodel';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
clientDetails: ClientViewModel= new ClientViewModel();
loading: boolean;
saving: boolean;
editMode: boolean;
  constructor() { }

  ngOnInit() {
    this.editMode = true;
  }

  edit(){

  }

  delete(){

  }

  cancel(){

  }

  onSubmit(){

  }
}
