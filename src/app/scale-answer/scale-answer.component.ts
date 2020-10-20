import { Component, Input, OnInit } from '@angular/core';

//THIS IS A CONTROL

@Component({
  selector: 'app-scale-answer',
  templateUrl: './scale-answer.component.html',
  styleUrls: ['./scale-answer.component.css']
})
export class ScaleAnswerComponent implements OnInit {

  constructor() { }

  @Input() htmlIcon: string;
  @Input() strText: string;
  @Input() clsColour: string = "";
  @Input() strNum: string;
  @Input() cssStyle: string = "";

  ngOnInit(): void {
  }

}
