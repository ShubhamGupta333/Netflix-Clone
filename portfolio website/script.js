$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
//Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
// ended

// function sendmail(){
//     window.open('mailto:skg945133@gmail.com ? subject = "cheching maill" & body= "hi shubham" ');
// }



//*********//MASSAGE //*********//

// var btn = document.getElementById('btn');
// btn.addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log("Hi");
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;
//     var body ='name' + name + ' <br> email: '+ email + '<br> subject: '
//     + subject +'<br> message <br>' +message;

//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "sg945133@gmail .com",
//         Password : "9807635100",
//         To : 'sg945133@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert("message send succesfully"+message)
//     );

// })
// function sendmail(){
//     Email.send({
//     Host : "smtp.gmail.com",
//     Username : "sg945133@gmail.com",
//     Password : "9807635100",
//     To : 'skg945133@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New Contect From Enquiry",
//     Body : "Name : "+ document.getElementById("name").value
//             +"<br> Email :"+ document.getElementById("email").value
//             +"<br> Subject :"+ document.getElementById("subject").value
//             +" <br> Message <br>"+ document.getElementById("message").value


// }).then(
// message => alert("message send succesfully .")
// );
// }