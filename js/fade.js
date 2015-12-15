function post(url, pos, choice){
  method = "post";
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", url);
  var field = document.createElement("input");
  field.setAttribute("choice", choice);
  field.setAttribute("position", pos);
  form.appendChild(field);
  document.body.appendChild(form);
  form.submit();
}

function cycleImages(){
      var $active = $('#cf .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cf pic:first');
      $next.css('z-index',2);
      $active.fadeOut(1000,function(){
    $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function() {
  $("#cf").click(function() {
    //TODO need help
    //post("http://teamd-first.elasticbeanstalk.com/userSurvey/finish/", pos, choice)
  cycleImages()
});
});


