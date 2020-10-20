import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-drain',
  templateUrl: './fluid-drain.component.html',
  styleUrls: ['./fluid-drain.component.css']
})
export class FluidDrainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //when the page is loaded
    $(window).on("load", function () {

      //declare function
      function add(val){
        //add this value to the existing value
        $("#fluidInput").val( parseFloat($("#fluidInput").val())+val);
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

      //if not chosen earlier
      if (!chosen) {
        window.onbeforeunload = function () {
          return true;
        };
        //validate the form
        $(".scale_showSelected.alert").removeClass("alert-danger");
        $(".scale_showSelected.alert").addClass("alert-primary");

        //alert unsaved changes
        $(".scale_back").html($(".scale_back").html() + "*");
      }

      //clear selection
      $(".scale_btns .btn").removeClass("scale_this");

      //show selection
      $(this).addClass("scale_this");
      chosen = true;
      $(".scale_showSelected").html('You have picked <span class="scale_selected"></span>mL.');

      //validate/validation-reset the form
      $(".scale_submit").prop('disabled', false);
      $("#invalidNumber").css("display", "none");

      //on value change
      $("#fluidScale").change(function () {

        //if the values are different, make them the same
        if ($("#fluidInput").val() != $("#fluidScale").val())
          $("#fluidInput").val($("#fluidScale").val());
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

        //if the values are different, make them the same
        if ($("#fluidInput").val() != $("#fluidScale").val())
          $("#fluidScale").val($("#fluidInput").val());
        done();
      });

      //

      //force value change on page load
      $("#fluidInput").val($("#fluidScale").val());
      //update the output fields
      done();


      //make buttons call function
      $("#btnPlus").click(function(){
        add(1);
      });
      $("#btnMinus").click(function(){
        add(-1);
      });

      //on error dismiss call function
      $("#btnDismiss").click(function(){
        done();
      });

      //end of $.on
    });

  }

}
