import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-start',
  templateUrl: './survey-start.component.html',
  styleUrls: ['./survey-start.component.css']
})
export class SurveyStartComponent implements OnInit {


  //possibly for testing purposes only
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['n']) this.strName = params['n'];
      if (params['t']) this.strText = params['t'];

      });
  } 


  @Input() strText: string="Description here";
  @Input() strName: string="Subject here";
  ngOnInit(): void {
  }

}
