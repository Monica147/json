// var promise=new Promise(
//     function(resolve,reject)
//     {
//         setTimeout(()=>{
//             resolve('promise resolved')
//         },2000);
//     }
// )
// console.log(promise)



// var a=30;
// var promise=new Promise(
//     function(resolve,reject)
//     {
//         setTimeout(()=>{
//             if(a<30){
//                 resolve("promise resolved")
//             }
//            else{
//             reject("promise reject")
//            }

//         },2000)
//     }
// ).then();

// console.log(promise);


// function demo(){
//     return new Promise((resolve)=>
//     {
//         resolve('resolved')
    
//     },2000);
// }
// async function call(){
//     console.log("call a function");
//     const ans=await demo();
//     console.log(ans);

// }
// call();

fetch('./data.json')
.then((res) => res.json())
.then((datalist) => {
    let userdisplay = document.getElementById("card-body");
    let getdata = "";
    datalist.map((index) => {
        getdata += `<h5>${index.Name}</h5><p>${index.Age}</p><p>${index.Designation}</p><hr>`;
    })
    userdisplay.innerHTML = getdata;
})
















