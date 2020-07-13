import { Component, OnInit } from '@angular/core';

import { SquadService } from '../shared/squad.service';
import { Squad } from '../shared/squad.model'

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css'],
  providers : [SquadService]
})
export class SquadsComponent implements OnInit {

  constructor(private squadService: SquadService) { }

  ngOnInit(): void {
  }

}
