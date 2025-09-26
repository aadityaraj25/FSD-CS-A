const username = "ADITYA23B0121263"
const url = `https://dummyjson.com/users?limit=35`;
const pr = fetch(url);
           pr.then((res)=>{
            return res.json();
           })
          .then((data)=>{
             console.log("Data=",data);
            }) 
           .catch((err)=>{
            console.log("Error : err");
           }) 
           .finally((err)=>{
            console.log("Inside Finally");
           });