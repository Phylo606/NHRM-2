import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() strTitle: string = "Enter Title";
  @Input() strUser: string = "John";
  @Input() strBackButtonTitle: string = "Home";
  @Input() urlBackLink: string = "";
  @Input() bolTransparent: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (this.bolTransparent) {
      console.warn("Necessary changes to DOM made for transparent titlebar.");
        $(".nh_topbar").addClass('nh_home_hide');
        $("._title").html("");
        
    }
  
  }

}
