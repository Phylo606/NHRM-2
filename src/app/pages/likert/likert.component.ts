import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.css']
})
export class LikertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('load',function(){
      $('#okButton').on('click',function(){
        alert($("#output2").text());
      })
    })
  }

}
