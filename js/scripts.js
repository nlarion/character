$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var total = 0;
    var array = [parseInt($('input[name=ageRadios]:checked').val()), parseInt($('input[name=superRadios]:checked').val()), parseInt($('input[name=jobRadios]:checked').val()) ,parseInt($('input[name=foodRadios]:checked').val())];

    // array.forEach(function(arr){
    //   total += arr;
    // });

    for (var i = 0; i < array.length; i++){
      total += array[i];
    }



    // var total = parseInt($('input[name=ageRadios]:checked').val());
    // total += parseInt($('input[name=superRadios]:checked').val());
    // total += parseInt($('input[name=jobRadios]:checked').val());
    // total += parseInt($('input[name=foodRadios]:checked').val());
    console.log(total);

    if(total < 5){
      hideAll();
      $("#jerry").show();
    }else if(total > 4 && total < 7){
      hideAll();
      $("#george").show();
    }else if(total > 6 && total < 9){
      hideAll();
      $("#kramer").show();
    }else if(total > 8 && total < 11){
      hideAll();
      $("#newman").show();
    }else {
      hideAll();
      $("#elaine").show();
    }


    function hideAll(argument) {
      $("#jerry").hide();
      $("#kramer").hide();
      $("#george").hide();
      $("#newman").hide();
      $("#elaine").hide();
    }


    event.preventDefault();
  });
});
