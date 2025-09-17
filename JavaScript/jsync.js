function register(){
    waitforfiveseconds();
    console.log("Register end");
}
function sendEmail(){
    waitforfiveseconds()
    console.log("Send email end");
}
function getdata(){
    waitforfiveseconds()
    console.log("get data end");
}
function login(){
    waitforfiveseconds()
    console.log("Login end");
}
function displayData(){
    waitforfiveseconds()
    console.log("display data end");
}
function waitforfiveseconds(){
    const n = new Date().getTime()+5000;
    while(new Date().getTime()<n){}
}
register();
sendEmail();
getdata();
login();
displayData();
console.log('Call other application');
