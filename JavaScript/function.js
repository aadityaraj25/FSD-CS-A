// types of fn in javascript

function hello(user='Guest'){
    console.log(`Hello ${user}`);
}
hello();
hello('Aditya !!');

function sum(a,b){
    console.log("Before");
    return a+b;
    console.log("After"); // not going to execute;
}
const z = sum(10,9)
console.log('sum = '+z)

const add=(a=5,b=6)=> a+b;
console.log(add(10,9));

(function(){
    console.log('inside IIFE');
})();

function f1(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
f1('admin',()=>{
    console.log(add(30,50));
});