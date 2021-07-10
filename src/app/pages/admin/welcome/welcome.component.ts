import { UserService } from 'src/app/services/user.service';
import { Observable,Subject } from "rxjs";
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };  

    this._user.viewPlayer().subscribe(
      (data: any) => {
        //css
        this.users = data;
        this.dtTrigger.next();
        //console.log(this.users);
      },

      (error) => {
        //
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
        
      }
    );
  }

  deletePlayer(id) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...

        this._user.deleteUser(id).subscribe(
          (data) => {
            this.users = this.users.filter((user) => user.userId != id);
            Swal.fire('Success', 'Player deleted ', 'success').then((result) => {
              // Reload the Page
              location.reload();
            });
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting Player', 'error');
          }
        );
      }
    });
  }

}
