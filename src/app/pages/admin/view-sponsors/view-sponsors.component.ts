import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/services/sponsor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-sponsors',
  templateUrl: './view-sponsors.component.html',
  styleUrls: ['./view-sponsors.component.css']
})
export class ViewSponsorsComponent implements OnInit {

  sponsors=[]

  constructor(private _sponsor:SponsorService) { }

  ngOnInit(): void {
    this._sponsor.sponsors().subscribe(
      (data: any) => {
        //css
        this.sponsors = data;
        //console.log(this.sponsors);
      },

      (error) => {
        //
        //console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

}
