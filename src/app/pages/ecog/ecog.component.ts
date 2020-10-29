import { Component, OnInit } from '@angular/core';
import { ScaleScreenComponent } from 'src/app/scale-screen/scale-screen.component';

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
        window.removeEventListener('beforeUnload',ScaleScreenComponent.onExit)
        window.location = '/ipc';
      })
    }
  },100);

  }

}
