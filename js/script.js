$(document).ready(function(){
    $(".col-md-3").hover(function(){
        $("#ontario").toggleClass("hovereffect");
    
      });
    });
      $(".col-md-3").hover(function(){
        $("#studio").toggleClass("hovereffect");
    
      });
        $(".col-md-3").hover(function(){
          $("#jim").toggleClass("hovereffect");
    
      });
        $(".col-md-3").hover(function(){
          $("#day").toggleClass("hovereffect");
    });
      $(".col-md-3").hover(function(){
      $("#calculator").toggleClass("hovereffect");
  
      });
      $(".col-md-3").hover(function(){
      $("#burned").toggleClass("hovereffect");
  
      });
      $(document).ready(function() {
        $(".design").click(function() {
          $(".image3").slideToggle();
          $(".de").slideToggle();
          padding: 0;
        
        });
        });
        $(".develop").click(function() {
          $(".image1").slideToggle();
          $(".dev").slideToggle();
        });
      
        $(".product").click(function() {
          $(".image2").slideToggle();
          $(".pro").fadeToggle();
        });
    

        $(document).ready(function(){
            $("form#formsubmit").submit(function(event){
               event.preventDefault();
              var name = $("input#name1").val();
              var email = $("input#name2").val();
              var message = $("textarea#comment").val();
              if ($("input#name1").val() && $("input#name2").val()){
                alert (name + ",We have received your message. Thanks for your feedback.");
              }
              else {
                alert("Please enter a valid email and name!");
              }
            });
          
          });
