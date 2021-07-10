import { PlayerAttendanceService } from 'src/app/services/player-attendance.service';
import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  attendances=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private _attend:PlayerAttendanceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this._attend.playerAttendances().subscribe(
      (data: any) => {
        //css
        this.attendances = data;
        this.dtTrigger.next();
        //console.log(this.feedbacks);
      },

      (error) => {
        //
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
        
      }
    ); 
  }

}
