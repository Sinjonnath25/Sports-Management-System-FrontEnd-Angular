import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-trainers',
  templateUrl: './contact-trainers.component.html',
  styleUrls: ['./contact-trainers.component.css']
})
export class ContactTrainersComponent implements OnInit {
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
    this._user.viewTrainer().subscribe(
      (data: any) => {
        //css
        this.users = data;
        this.dtTrigger.next();
        console.log(this.users);
      },

      (error) => {
        //
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
        
      }
    ); 
  }

}
