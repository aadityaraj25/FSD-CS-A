// function register() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('register end');
//             cb();
//             resolve();
//         }, 8000);
//     });
// }

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('send email end');
//             cb();
//             resolve();
//         }, 3000);
//     });
// }

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('login end');
//             reject('Login Failed');
//             resolve();
//         }, 2000);
//     });
// }

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('get data end');
//             cb();
//             resolve();
//         }, 1000);
//     });
// }

// function displayData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('display Data end');
//             resolve();
//         }, 4000);
//     });
// }

// // callback hell (unchanged)
// // register(() => {
// //     sendEmail(() => {
// //         login(() => {
// //             getData(() => {
// //                 displayData();
// //             });
// //         });
// //     });
// // });


// // using Promise
// // register().then(sendEmail)
// //           .then(login)
// //           .then(getData)
// //           .then(displayData)
// //           .catch((err)=>console.log("Error Occured"+err))
// //           .finally(()=>(console.log("Inside Finally")
// //           ))

// async function f1(){
//     await register();
//     await sendEmail();
//     await login();
//     await getData();
//     await displayData();
// f1();
// console.log('call other application');


















// sir's code 

function register(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('register end');
      resolve();
    },9000)
   })
    
    
}
function sendEmail(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('send Email end');
      resolve();
    },3000)
   })
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('login end');
      reject('login failed');
    },2000)
   })
    
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('getData end');
      resolve();
    },1000)  
})
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('display Data end');
      resolve();
    },1000)  
})
    
}
//callback hell

// register(()=>{
//             sendEmail(()=>{
//                     login(()=>{
//                         getData(()=>{
//                                     displayData();
//                         });
//                 });
//             });
// });

// using Promise
// register().then(sendEmail)
//           .then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{console.log('Error: '+err)})
//           .finally(()=>{console.log('Inside Finally')})
async function f1(){
 try{
    await register();
 await sendEmail();
 await login();
 await getData();
 await displayData();
 }
  catch(err){
    console.log("Error :"+err);
  }
}
f1();
console.log('call other application')