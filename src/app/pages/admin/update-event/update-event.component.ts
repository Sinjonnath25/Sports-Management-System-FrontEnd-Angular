import { EventService } from 'src/app/services/event.service';
import { SponsorService } from 'src/app/services/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _event: EventService,
    private _spon: SponsorService,
    private _router: Router) { }

    eId = 0;
  event;
  sponsors;

  ngOnInit(): void {
    this.eId = this._route.snapshot.params.eId;
    // alert(this.qId);
    this._event.getEvent(this.eId).subscribe(
      (data: any) => {
        this.event = data;
        console.log(this.event);
      },
      (error) => {
        console.log(error);
      }
    );

    this._spon.sponsors().subscribe(
      (data: any) => {
        this.sponsors = data;
      },
      (error) => {
        alert('error in loading categories');
      }
    );
  }

  //update form submit
  public updateData() {
    //validatate

    this._event.updateEvent(this.event).subscribe(
      (data) => {
        Swal.fire('Success !!', 'Event updated', 'success').then((e) => {
          this._router.navigate(['/admin/events']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating event', 'error');
        console.log(error);
      }
    );
  }

}
