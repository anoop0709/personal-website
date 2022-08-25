/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});



//form validation



let flag = 0;


function validation(){
   
    //let form = document.getElementById("gform");
    let emailId = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    let fullName = document.getElementById("fullName").value;
    let message = document.getElementById("message").value;
    
    
    // Name validation
    if(fullName == ''){
        document.getElementById("namenotvalid").innerHTML = "** Please enter your name.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
    else if((fullName.length < 3 ) || (fullName.length > 20)){
        document.getElementById("namenotvalid").innerHTML = "** Please enter a name with length between 3 to 20.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     else if(!isNaN(fullName)){
        document.getElementById("namenotvalid").innerHTML = "** Please enter only alphabets.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     else{
        document.getElementById("namenotvalid").innerHTML = '';
     }

    //Email validation

     if(emailId == ''){
        document.getElementById("emailnotvalid").innerHTML = "** Please enter your Email.";
        document.getElementById("email").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     else if((emailId.indexOf('@') <= 0) || (emailId.indexOf('@') <= emailId.length-4)){
        document.getElementById("emailnotvalid").innerHTML = "** Please use a @ in your Email.";
        document.getElementById("email").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
    else if((emailId.charAt(emailId.length-4)!= '.') && (emailId.charAt(emailId.length-3)!= '.')){
        document.getElementById("emailnotvalid").innerHTML = "** Please enter a valid Email.";
        document.getElementById("email").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     
     else{
        document.getElementById("emailnotvalid").innerHTML = '';
        flag=0;
     }
     
     //phone number validation

     if(phoneNumber == ''){
        document.getElementById("numbernotvalid").innerHTML = "** Please enter your phone number.";
        document.getElementById("phone").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
    else if(isNaN(phoneNumber)){
        document.getElementById("numbernotvalid").innerHTML = "** Please enter a valid number.";
        document.getElementById("phone").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     else if(phoneNumber.length < 10){
        document.getElementById("numbernotvalid").innerHTML = "** phone number must be 10 digits.";
        document.getElementById("phone").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }
     else{
        document.getElementById("numbernotvalid").innerHTML = '';
        flag=0;
     }

     //message validation

     if(message == ''){
        document.getElementById("messagenotvalid").innerHTML = "** Please enter a message.";
        document.getElementById("message").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }else if(message.length < 20){
        document.getElementById("messagenotvalid").innerHTML = "** Please enter atleast 20 characters in your message.";
        document.getElementById("message").style.borderBottom = "1px solid red";
        flag=1;
        return false;
     }else{
        document.getElementById("messagenotvalid").innerHTML = '';
        flag=0;
     }

}

let successMessage = document.getElementById("successM");

    $("#submit-Button").submit((e)=>{
        e.preventDefault();
        if(flag==0){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbz4ffvJFSQbqQT80BSJ0vnJd0FAoBy346YTMoRV42Tr1X_3n86zvEDJaCUI6hDy2xE1/exec",
            data:$("#submit-Button").serialize(),
            method:"post",
            success:function (response){
               successMessage.style.display = 'flex';
               setTimeout(() => {
                window.location.reload()
    
               },3000);
               
            },
            error:function(err){
                
            alert("Something went wrong please try again!")
                
            }
        })
    }
    })



