import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  events=[]

  constructor(private _event: EventService) { }

  ngOnInit(): void {
    this._event.events().subscribe(
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

  deleteEvent(eId) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...

        this._event.deleteEvent(eId).subscribe(
          (data) => {
            this.events = this.events.filter((event) => event.eId != eId);
            Swal.fire('Success', 'Event deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }

}
