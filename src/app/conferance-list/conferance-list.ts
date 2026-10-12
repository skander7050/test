import { Component } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink, ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances :any[]=[
    {id:1,name:"angular",date:"2023-01-01",place:"tunis"},
    {id:2,name:"react",date:"2023-02-01",place:"sfax"},
    {id:3,name:"vue",date:"2023-03-01",place:"sousse"},
  ]

  inc(){alert('increment');}
}
