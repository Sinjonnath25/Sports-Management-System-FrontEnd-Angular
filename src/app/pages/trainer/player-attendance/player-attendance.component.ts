import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { PlayerAttendanceService } from 'src/app/services/player-attendance.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-player-attendance',
  templateUrl: './player-attendance.component.html',
  styleUrls: ['./player-attendance.component.css']
})
export class PlayerAttendanceComponent implements OnInit {

  players=[]

  attendanceData={
    playerName:'',
    date:'',
    status:'',
  }

  constructor(
    private _attend:PlayerAttendanceService,
    private _snack: MatSnackBar,
    private _player: UserService 
  ) { }

  ngOnInit(): void {
    this._player.viewPlayer().subscribe(
      (data: any) => {
        //categories load
        this.players = data;
        console.log(this.players);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }

  addAttendance() {
    if (this.attendanceData.playerName.trim() == '' || this.attendanceData.playerName == null) {
      this._snack.open('Player Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server
    this._attend.addAttendance(this.attendanceData).subscribe(
      (data) => {
        Swal.fire('Success', 'Attendance is Submitted', 'success');
        this.attendanceData = {
          playerName:'',
    date:'',
    status:'',
    };
    },

      (error) => {
        Swal.fire('Error!! ', 'You have already submitted Attendance for this Player', 'error');
        console.log(error);
      }
    );
  }

}
