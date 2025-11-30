// Loops & Strings;

// for (let i=1 ; i <= 10 ;i++) {
//     console.log("Jai Shree RAM")
// }

// console.log("Loop has ended");


// Calulate Sum Of N numbers;

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++){
//     sum= sum + i;
// }
// console.log("sum =" ,sum);



// While Loop;

// let i = 1;
// while (i<=5){
//     console.log("i =", i);
//     i++;
// }

// Do While loop;

// let i =1;
// do{
//     console.log("JAI SHREE RAM");
//     i++; 
// } while (i<= 10);

// For Of Loop;
// let str ="SITA RAM";
// let size = 0;
// for(let i of str){
//     console.log("i =" ,i);
//     size++;
// }
// console.log("string Size=",size );

//  For in Loop;
// let  student= {
//     name : "Sita Ram",
//     age : 5,
//     cgpa : 9.9,
//     isPass : true
// };
// for (let key in student ){
//     console.log("key =",key, "value =", student[key]);
// }


// STRINGS IN J.S;

let str = "SITA RAM SITA SITA RAM RAM ";
// let str1 = "Hanuman"
// let result = str.concat(str1);
// console.log(result)
console.log(str.replaceAll("SITA" , "Raja"));