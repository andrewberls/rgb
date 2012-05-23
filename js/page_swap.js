// function shiftTo(divID) {
//   $("#info").css("display", "block");
//   if (divID === 'hexToRGB') {
//     $("#rgbToHex").css("display", "none");
//     $("#hexToRGB").css("display", "block");
//     $("#hexPreview").css("background-color", '#00FFCC'); 
//     $("#hexText").css("color", '#00FFCC');
//     $("#out_R").val('0');
//     $("#out_G").val('255');
//     $("#out_B").val('204');
//     $("#in_hex").val('00FFCC');   
//   } else {
//     $("#hexToRGB").css("display", "none");
//     $("#rgbToHex").css("display", "block");   
//     $("#rgbPreview").css("background-color", '#FF0000'); 
//     $("#rgbText").css("color", '#FF0000');
//     $("#in_R").val('255');
//     $("#in_G").val('0');
//     $("#in_B").val('0');
//     $("#out_hex").val('#FF0000');
//   }
// }

// $(function() {
//   $('#navbar li a').click(function() {
//     $('#navbar li a').removeClass('current');   
//     $(this).addClass('current');
//   });
// });

$(function() {
  $('#convert-form').load('rgb_form.html');
});