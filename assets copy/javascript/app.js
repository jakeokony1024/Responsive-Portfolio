
$("#clearbtn").on("click", function(){
    $("#name").empty();
    $("#email").empty();
    $("#message").empty();
})

// $("#submitbtn").on("click", function(event){
//     event.preventDefault();
//     emailData = {
//     name: $("#name").val().trim(),
//     email: $("#email").val().trim(),
//     message: $("#message").val().trim()
//     }
// //     if (emailData != null) {
// //     $.ajax({
// //         url: "php.php",
// //         type: "POST",
// //         data: emailData,
// //         sucess: function(){
// //             console.log("this was successful")
// //         }
// //     });
// // } else {
// //     console.log("no email sent...")
// // }
// });
