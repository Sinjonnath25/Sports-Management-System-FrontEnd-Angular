import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SponsorService } from 'src/app/services/sponsor.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  sponsors=[]

  eventData = {
    title: '',
    description: '',
    location: '',
    date: '',
    active: true,
    sponsor: {
      sid: '',
    },
  };

  constructor(
    private _spon: SponsorService,
    private _snack: MatSnackBar,
    private _event: EventService
  ) 
  { }

  ngOnInit(): void {
    this._spon.sponsors().subscribe(
      (data: any) => {
        //categories load
        this.sponsors = data;
        //console.log(this.sponsors);
      },

      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }

  addEvent() {
    if (this.eventData.title.trim() == '' || this.eventData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server
    this._event.addEvent(this.eventData).subscribe(
      (data) => {
        Swal.fire('Success', 'Event is added', 'success');
        this.eventData = {
          title: '',
    description: '',
    location: '',
    date: '',
    active: true,
    sponsor: {
      sid: '',
    },
    };
    },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding quiz', 'error');
        console.log(error);
      }
    );
  }

}
