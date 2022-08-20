let form = document.getElementById("contactForm");
let emailId = document.getElementById("email").value;
let phoneNumber = document.getElementById("phone").value;
let fullName = document.getElementById("name").value;
let message = document.getElementById("message").value;

function validation(){
    if(fullName == ''){
        document.getElementById("namenotvalid").innerHTML = "** Please enter your name.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        return false;
     }
    else if((fullName.length < 3 ) || (fullName.length > 20)){
        document.getElementById("namenotvalid").innerHTML = "** Please enter a name with length between 3 to 20.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        return false;
     }
     else if(!isNaN(fullName)){
        document.getElementById("namenotvalid").innerHTML = "** Please enter only alphabets.";
        document.getElementById("fullName").style.borderBottom = "1px solid red";
        return false;
     }
     else{
        document.getElementById("namenotvalid").innerHTML = '';
     }
}