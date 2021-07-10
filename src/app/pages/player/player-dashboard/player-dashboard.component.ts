import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  constructor(private location:LocationStrategy) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
   }

  ngOnInit(): void {
  }

}
