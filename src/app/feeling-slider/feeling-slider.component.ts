import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling-slider',
  templateUrl: './feeling-slider.component.html',
  styleUrls: ['./feeling-slider.component.css']
})
export class FeelingSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //when the page is loaded
    setTimeout(() => {  {   

      //declare function
      function add(val) {
        //add this value to the existing value
        $("#fluidInput").val(parseFloat($("#fluidInput").val()) + val);
        //update the value
        $("#fluidScale").val($("#fluidInput").val());
        //refresh
        done();

      }

      var chosen = false;
      //

      //declare function
      function done() {
        //change the output value
        $(".scale_selected").html($("#fluidInput").val());
        //hide error
        $(".invalidNumber").css("display", "none");
      }

      //clear selection
      $(".scale_btns .btn").removeClass("scale_this");

      //show selection
      $(this).addClass("scale_this");
      chosen = true;
      $(".scale_showSelected").html('');

      //validate/validation-reset the form
      $(".scale_submit").prop('disabled', false);
      $("#invalidNumber").css("display", "none");

      //on value change
      $("#fluidScale").change(function () {

        done();
      });

      //on value change
      $("#fluidInput").change(function () {

        //if the value is undefined or less than zero
        if (isNaN(parseFloat($("#fluidInput").val())) || parseFloat($("#fluidInput").prop("min")) > parseFloat($("#fluidInput").val())) {

          //reset the input fields
          $("#fluidInput").val($("#fluidScale").val());
          //reset the output fields
          done();
          //throw error (unhide all error alerts)
          $(".invalidNumber").css("display", "");
          //quit $.change
          return;
        }


        done();
      });

      //

      //force value change on page load
      $("#fluidInput").val($("#fluidScale").val());
      //update the output fields
      done();


      //on error dismiss call function
      $("#btnDismiss").click(function () {
        done();
      });

    }
  },100);

  }

}


