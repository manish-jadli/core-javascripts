"use strict";

function confirmSubmit(){
    var amount=document.getElementById('amount').value;
    var period=document.getElementById('period').value;
    var interest=document.getElementById('interest').value;
    var finalAmount=document.getElementById('finalAmount').value;
    var finalAmount=(amount*period*interest/100);
    var totalAmount= parseFloat(amount*period) + parseFloat(finalAmount)  ;
    document.getElementById('finalAmount').innerHTML=totalAmount;
    document.getElementById('profitLossError').innerHTML=totalAmount;
    var accountNo=document.getElementById('accountNo').value;
};

function finalAmountShow(){
var amount=document.getElementById('amount').value;
var period=document.getElementById('period').value;
var interest=document.getElementById('interest').value;
var finalAmount=document.getElementById('finalAmount').value;
var finalAmount=(amount*period*interest/100);
var totalAmount= parseFloat(amount*period) + parseFloat(finalAmount);
document.getElementById('finalAmount').value=totalAmount;
document.getElementById('profitLossError').innerHTML='Your final is: ' + totalAmount;
};


function logout(){
    alert('You have successfully logout.');
    location.href="../../../index.html";
}

function init(){}
init();



function init(){}
init();