$(document).ready(function () {

    //     $(".Accordian--Issue1").click(hide);

    //     function hide(){ 
    //         $('.script--issue1').hide(200);
    //     } 

    // })

    // $('h1').hide()
    // $('h1').fadeIn(20);


    // $('.flex--Important').hide();
    // $('.flex--Important').fadeIn(100);

    // $('.flex--RepArea').hide();
    // $('.flex--RepArea').fadeIn(2000);

    // $('.acordian').hide();
    // $('.acordian').fadeIn(5000);


    //Hiding all the different script--issues so they are defaulted to be hidden until clicked 
    $('.script--issue1').hide();
    $('.script--issue2').hide();
    $('.script--issue3').hide();
    $('.script--issue4').hide();



    //Click function that will show the scripts

    $('.issue1').click(function () {
        $('.issue1').find('.script--issue1').slideToggle(300);

    })
})

$('.issue2').click(function () {
    $('.issue2').find('.script--issue2').slideToggle(300);

})


$('.issue3').click(function () {
    $('.issue3').find('.script--issue3').slideToggle(300);

})


$('.issue4').click(function () {
    $('.issue4').find('.script--issue4').slideToggle(300);

})




//Click event to insert someone's name at the end in the Issues area if you want to
$('.button2').click(function (name) {

    var name = $("#here").val();

    $(".output").html(name + "");

})