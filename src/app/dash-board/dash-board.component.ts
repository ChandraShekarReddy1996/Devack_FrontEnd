import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      console.log(params)
    })
  }

  ngOnInit() {
  }

}
