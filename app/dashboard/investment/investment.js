"use strict";

function monthlybased(){
    document.getElementById('monthlybasedskim').style.display="block";
    document.getElementById('monthlybase').classList.add("active");
    document.getElementById('quarterlybase').classList.remove("active");
    document.getElementById('halfYearlybase').classList.remove("active");
    document.getElementById('annuallybase').classList.remove("active");
    document.getElementById('quarterlybasedskim').style.display="none";
    document.getElementById('halfYearlybasedskim').style.display="none";
    document.getElementById('annuallybasedskim').style.display="none";
}

function quarterlybased(){
    document.getElementById('quarterlybasedskim').style.display="block";
    document.getElementById('monthlybase').classList.remove("active");
    document.getElementById('quarterlybase').classList.add("active");
    document.getElementById('halfYearlybase').classList.remove("active");
    document.getElementById('annuallybase').classList.remove("active");
    document.getElementById('monthlybasedskim').style.display="none";
    document.getElementById('halfYearlybasedskim').style.display="none";
    document.getElementById('annuallybasedskim').style.display="none";
}

function halfyearlybased(){
    document.getElementById('halfYearlybasedskim').style.display="block";
    document.getElementById('monthlybase').classList.remove("active");
    document.getElementById('quarterlybase').classList.remove("active");
    document.getElementById('halfYearlybase').classList.add("active");
    document.getElementById('annuallybase').classList.remove("active");
    document.getElementById('quarterlybasedskim').style.display="none";
    document.getElementById('monthlybasedskim').style.display="none";
    document.getElementById('annuallybasedskim').style.display="none";
}

function annuallybased(){
    document.getElementById('annuallybasedskim').style.display="block";
    document.getElementById('monthlybase').classList.remove("active");
    document.getElementById('quarterlybase').classList.remove("active");
    document.getElementById('halfYearlybase').classList.remove("active");
    document.getElementById('annuallybase').classList.add("active");
    document.getElementById('quarterlybasedskim').style.display="none";
    document.getElementById('halfYearlybasedskim').style.display="none";
    document.getElementById('monthlybasedskim').style.display="none";
}


//run firstly this code
function init(){
    document.getElementById('monthlybase').classList.add("active");
}
//end

init();