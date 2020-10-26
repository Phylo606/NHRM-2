import { Component, Input, OnInit } from '@angular/core';

//THIS IS A CONTROL

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
  @Input() bolTransparent: boolean;
  @Input() bolShowBackSpacer: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.bolTransparent) {
      console.warn("Necessary changes to DOM made for transparent titlebar.");
      $(".nh_topbar").addClass('nh_home_hide');
      $("._title").html("");

    }
    console.log(this.bolShowBackSpacer);
    if (this.bolShowBackSpacer==false) {

      console.warn("Necessary changes to DOM made for hidden titlebar spacer.");
      $(".nh_topbar_back").css("display","none");
    }

  }

}
