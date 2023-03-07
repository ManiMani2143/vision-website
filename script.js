
function username(){
    var name=document.getElementById("name1").value;
    if(name.length==0){
        document.getElementById("results").innerHTML="Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        document.getElementById("results").innerHTML="Write full name"
        return false;

    }
    document.getElementById("results").innerHTML='Valid <i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;
}

function mail(){
    var email=document.getElementById("email1").value;
    if(email.length==0){
        document.getElementById("results1").innerHTML='Email is required';
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("results1").innerHTML='Email Invalid'

    return false;
    }
    document.getElementById("results1").innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>'
    return true;
    
}


function phone(){
    var phone=document.getElementById("phone1").value;
    if(phone.length == 0){
        document.getElementById("results2").innerHTML='Phone no is required'
        return false;
    }
    if(phone.length !==10){
        document.getElementById("results2").innerHTML='Phone no should be 10 digits!'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        document.getElementById("results2").innerHTML='Only digits please'
        return false;

    }
    document.getElementById("results2").innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;

}

function message(){
    var message=document.getElementById("message1").value;
    var required =30;
    var left = required -message.length;
    if(left >0){
        document.getElementById("results3").innerHTML=left + 'More character required';
        return false;

    }
    document.getElementById("results3").innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;


}


function validateform(){
    if(!username() || !mail() || !phone() || !message()){
        document.getElementById("results4").style.display ='block';
        document.getElementById("results4").innerHTML ='please fix error to submit';
        setTimeout(function(){ document.getElementById("results4").style.display = 'none' ;} ,1000);
        return false;
    }
}