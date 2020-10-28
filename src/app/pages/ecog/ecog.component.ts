import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecog',
  templateUrl: './ecog.component.html',
  styleUrls: ['./ecog.component.css']
})
export class EcogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {  {   
         $('#okButton').on('click',function(){
        alert($("#output2").text());
      })
    }
  },100);

  }

}
