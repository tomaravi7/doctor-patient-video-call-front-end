jQuery(document).ready(function($) {
    var alterClass = function() {
      var vw = document.body.clientWidth;
      var vh = document.body.clientHeight;

      const head=$('#head')
      const box=$('#boxbox')

      const prep=$('#prep')

      if (vw < 992) {
        head.addClass('offcanvas offcanvas-top').attr("tabindex","-1").attr("aria-labelledby","offcanvasTopLabel");
        box.removeClass("d-none")
        prep.removeClass("col-md-4")
        prep.addClass("offcanvas offcanvas-end").attr("tabindex","-1").attr("aria-labelledby","offcanvasRightLabel");
      } else if (vw >= 992) {
        head.removeClass('offcanvas offcanvas-top').removeAttr("tabindex").removeAttr("aria-labelledby").removeAttr("aria-hidden").css("visibility","visible");
        box.addClass("d-none")
        prep.addClass("col-md-4")
        prep.removeClass("offcanvas offcanvas-end").removeAttr("tabindex").removeAttr("aria-labelledby").removeAttr("aria-hidden").css("visibility","visible");
      };

    };
    $(window).resize(function(){
      alterClass();
    });
    alterClass();

    $("#mic").click(function () {
      if ($("#mic").attr("class")=="fa-solid fa-microphone") {
        $(this).attr("class","fa-solid fa-microphone-slash")

      }else{
        $(this).attr("class","fa-solid fa-microphone")
      }

    })


  });