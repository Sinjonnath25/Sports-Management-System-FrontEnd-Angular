import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SponsorService } from 'src/app/services/sponsor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {

  sponsor={
    s_name:'',
    amount:'',
    description:'',
  };

  constructor(
    private _sponsor: SponsorService,
    private _snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.sponsor.s_name.trim() == '' || this.sponsor.s_name == null) {
      this._snack.open('Sponsor Name Required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.sponsor.amount.trim() == '' ||this.sponsor.amount == null) {
      this._snack.open('Amount Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //all done

    this._sponsor.addSponsor(this.sponsor).subscribe(
      (data: any) => {
        this.sponsor.s_name = '';
        this.sponsor.amount='';
        this.sponsor.description='';
        Swal.fire('Success !!', 'Sponsor is added successfuly', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Server error !!', 'error');
      }
    );
  }

}
