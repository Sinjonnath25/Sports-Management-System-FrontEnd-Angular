import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {

  trainers=[]

  feedbackData={
    playerName:'',
    trainerName:'',
    rating:'',
    comment:''
  }

  constructor(
    private _feed:FeedbackService,
    private _snack: MatSnackBar,
    private _tra: UserService 
  ) { }

  ngOnInit(): void {
    this._tra.viewTrainer().subscribe(
      (data: any) => {
        //categories load
        this.trainers = data;
        console.log(this.trainers);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }

  addFeedback() {
    if (this.feedbackData.playerName.trim() == '' || this.feedbackData.playerName == null) {
      this._snack.open('Player Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server
    this._feed.addFeedback(this.feedbackData).subscribe(
      (data) => {
        Swal.fire('Success', 'Feedback is Submitted', 'success');
        this.feedbackData = {
          playerName:'',
    trainerName:'',
    rating:'',
    comment:''
    };
    },

      (error) => {
        Swal.fire('Error!! ', 'You have already submitted feedback for this Trainer', 'error');
        console.log(error);
      }
    );
  }

}
