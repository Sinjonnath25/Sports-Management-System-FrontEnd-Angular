import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-player-events',
  templateUrl: './player-events.component.html',
  styleUrls: ['./player-events.component.css']
})
export class PlayerEventsComponent implements OnInit {

  events=[]

  constructor(private _event: EventService) { }

  ngOnInit(): void {
    this._event.getActiveEvents().subscribe(
      (data: any) => {
        this.events = data;
        console.log(this.events);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

}
