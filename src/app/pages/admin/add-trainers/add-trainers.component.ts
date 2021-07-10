import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trainers',
  templateUrl: './add-trainers.component.html',
  styleUrls: ['./add-trainers.component.css']
})
export class AddTrainersComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    type:'',
    phone: '',

  };

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.firstName == '' || this.user.firstName == null) {
      // alert('User is required !!');
      this.snack.open('FirstName is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.lastName == '' || this.user.lastName == null) {
      // alert('User is required !!');
      this.snack.open('LastName is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.email == '' || this.user.email == null ||this.user.email.includes("@") ==false) {
      // alert('User is required !!');
      this.snack.open('Email is required and in proper format!! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.phone.length < 10 ||this.user.phone.length > 10 || this.user.phone == null ||this.user.phone =='') {
      // alert('User is required !!');
      this.snack.open('Mobile No. is required and should have 10 digits !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.type == '' || this.user.type == null) {
      // alert('User is required !!');
      this.snack.open('Type is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //validate

    //addUser: userservice
    this.userService.addTrainer(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success').then((result) => {
          // Reload the Page
          location.reload();
        });
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
  }

  //this.user
}
