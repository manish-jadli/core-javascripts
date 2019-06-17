"use strict";

//login form code
function loginSubmit(){
    document.getElementById('signupForm').style.display="none";
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username == 'manish jadli' && password == '123456'){
        alert('You have successfully login.');
        location.href='app/dashboard/dashboard.html';
    }else{
        document.getElementById('loginError').innerHTML='Please fill required fields.';
    }
}
//end

//signup code 
function signup(){
    alert('You have move to signup form.');
    document.getElementById('signupForm').style.display="block";
    document.getElementById('loginForm').style.display="none";
    document.getElementById('forgetForm').style.display="none";
}
//end

//backup code
function back(){
    alert('You have move to login form.');
    document.getElementById('loginForm').style.display="block";
    document.getElementById('signupForm').style.display="none";
    document.getElementById('forgetForm').style.display="none";
}
//end

//signup form code
function signupSubmit(){
    var user=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var dob=document.getElementById('dob').value;
    var pass=document.getElementById('pass').value;
    var confirmpass=document.getElementById('confirmpass').value;
    if(user == 'manish jadli' && email == 'manishjadli12@gmail.com' && dob == '1991-01-01' && pass == '123456' && confirmpass == '123456'){
        alert('You have fill successfully records.');
        document.getElementById('loginForm').style.display="block";
        document.getElementById('signupForm').style.display="none";
        document.getElementById('forgetForm').style.display="none";
    }else{
        document.getElementById('signupError').innerHTML='Please fill required fields.';
    }
}
//end

//forget password code
function forgetSubmit(){
    var oldpassword=document.getElementById('oldpassword').value;
    var newpassword=document.getElementById('newpassword').value;
    var confirmpassword=document.getElementById('confirmpassword').value;
    if(oldpassword=='123456' && (newpassword =='12345' && confirmpassword=='12345')){
        alert('You will change password successfully.');
        document.getElementById('loginForm').style.display="block";
        document.getElementById('signupForm').style.display="none";
        document.getElementById('forgetForm').style.display="none";
    }else{
        document.getElementById('forgetError').innerHTML='Please fill required fields.';
    }
}
//end

//forget pass code
function forgetpass(){
alert('You have move to forget password screen.');
document.getElementById('forgetForm').style.display="block";
document.getElementById('loginForm').style.display="none";
document.getElementById('signupForm').style.display="none";
}

//end

//home screen
function home(){
    alert('You have move on home screen.');
    location.href="../dashboard.html";
}
//end







var arrays=[1,2,3,4,5,6,7,8,9];
for (var i=0; i <arrays.length; i++){
    var idofarray=arrays[i];
    console.log(idofarray);
}


var personDetail=[
{id:1,name:'manish',mobno:9045571092, active:true, address:[
    {id:1, vill:'sattichaur', postoffice:'nimbuchaur', city:'kotdwara', tehsil:'kotdwara', state:'uttrakhand', pin:246149, active:true}
]},
{id:2,name:'harish',mobno:9045571092, active:true, address:[
    {id:1, vill:'sattichaur', postoffice:'nimbuchaur', city:'kotdwara', tehsil:'kotdwara', state:'uttrakhand', pin:246149, active:true}
]},
{id:3,name:'girish',mobno:9045571092, active:true, address:[
    {id:1, vill:'sattichaur', postoffice:'nimbuchaur', city:'kotdwara', tehsil:'kotdwara', state:'uttrakhand', pin:246149, active:true}
]},
{id:4,name:'amit',mobno:9045571092, active:true, address:[
    {id:1, vill:'sattichaur', postoffice:'nimbuchaur', city:'kotdwara', tehsil:'kotdwara', state:'uttrakhand', pin:246149, active:true}
]},
{id:5,name:'ganesh',mobno:9045571092, active:true, address:[
    {id:1, vill:'sattichaur', postoffice:'nimbuchaur', city:'kotdwara', tehsil:'kotdwara', state:'uttrakhand', pin:246149, active:true}
]}
];

for(var j=0; j < personDetail.length; j++){
    var personData=personDetail[j];
    for (var k=0; k < personData.address.length; k++){
        var addressData= personData.address[k];

        console.log(addressData.city);
        }

    console.log(personData.name);
}

function init(){}

init();