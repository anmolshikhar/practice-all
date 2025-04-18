// let arr =[3,5,66,7];
// // arr.map((value)=>{
// //     console.log(value);
// //     console.log(value**2);
// // })
// // console.log(arr);
// // arr.forEach((value)=>{
// //     console.log(value**2);
// // })
// // console.log(arr);
// let a;
// // let anmol =["anmol","kannu","mannu","shikhar"];
// // anmol.map((value)=>{
// //     console.log(value.toUpperCase());
// // })
// arr.map((didi)=>{
//    a= didi/2;
//    return a;
// })
// // arr.forEach((ok)=>{
// //  console.log(ok/2);
  
// // })
// a.forEach((value)=>{
//     console.log(value)
// })
// const users = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
let url = "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=6"
let imag = document.querySelector("#img");
const getFacts = async() => {
    console.log("Fetching data...");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data[0].image);
    imag.src =(data[0].image);
}