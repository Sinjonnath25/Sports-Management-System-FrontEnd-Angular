import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {

  constructor(private location:LocationStrategy) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
   }

  ngOnInit(): void {
  }

}
