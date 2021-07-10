import { FeedbackService } from 'src/app/services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedbacks = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private _fed:FeedbackService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    }; 
    
    this._fed.feedbacks().subscribe(
      (data: any) => {
        //css
        this.feedbacks = data;
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
