import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createPublicKey } from 'crypto';

@Component({
  selector: 'app-scale-screen',
  templateUrl: './scale-screen.component.html',
  styleUrls: ['./scale-screen.component.css']
})
export class ScaleScreenComponent implements OnInit {

  //possibly for testing purposes only
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['q']) this.strQ = params['q'];
      if (params['a1']) this.strAns1 = params['a1'];
      if (params['a2']) this.strAns2 = params['a2'];
      if (params['a3']) this.strAns3 = params['a3'];
      if (params['a4']) this.strAns4 = params['a4'];
      if (params['a5']) this.strAns5 = params['a5'];
      });
  }  chosen: boolean = false;

  @Input() strQ: string = "Question Here";
  @Input() strAns1: string = "Answer 1 Here";
  @Input() strAns2: string = "Answer 2 Here";
  @Input() strAns3: string = "Answer 3 Here";
  @Input() strAns4: string = "Answer 4 Here";
  @Input() strAns5: string = "Answer 5 Here";


  ngOnInit(): void {
    $(window).on("load", function(){
      var a = this;


      $(".scale_btns .btn").click(function () {
  
  
        if (!a.chosen) {
          window.onbeforeunload = function () {
            return true;
          };
          $(".scale_showSelected.alert").removeClass("alert-danger");
          $(".scale_showSelected.alert").addClass("alert-primary");
          $(".scale_showSelected").html('You have picked <span class="scale_selected"></span>. You are: <span class="scale_selected2"></span>.');
          $(".scale_back").html($(".scale_back").html() + "*");
        }
        $(".scale_btns .btn").removeClass("scale_this");
        $(this).addClass("scale_this");
        a.chosen = true;
  
        $(".scale_selected").html($(this).children(".scale_label").html());
        $(".scale_selected2").html($(this).children(".scale_text").html());
        $(".scale_submit").prop('disabled', false);
  
      });
      console.info("Yay");
    })

  }
  init() {



  }
}
