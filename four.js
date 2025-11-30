// let marks =[34,35,56,67,23,45];
// console.log(marks);


// let prabhu = ["ram", "sita","hanuman","shyam","radha"];

// for(let idx = 0; idx< prabhu.length ; idx++){
//     console.log(prabhu[idx]);
// }

// let animals =["horse", "monkey", "lion", "tiger", "elephant"];
// for(let animal of animals ) {
//     console.log(animal.toUpperCase());
// }

// practice que for Array ;

// print the average marks for the entire class;

let marks =[56,77,65,76,45,67];
let sum = 0;

for (let val of marks){  //for of loop 
    sum += val;
}
let avg = sum / marks.length;
console.log(`the avg marks of class is = ${avg}`);


// practice question 2 Array ;

let item = [250, 645, 300, 900, 50 ];
// let i = 0;
// for (let val of item){
//     console.log(val);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`the final price after the offer =${item[i]}`);
//     i++;
// }

for (let i = 0; i< item.length;i++){
    let offer = item[i] / 10;
    item[i] -= offer;
    console.log(`The final price after the offer =${item[i]}`);
}


//  Array methods;
// push();

// let foodItems = ["kheer",  "roti", "paratha", "gobhi"];

// foodItems.push("ramras", "rabdi", "chole");
// console.log(foodItems);

// let vaikhunt = ["Narayan", "lakshmi", "shesh"];
// let shiv_puri = ["shiv ", "jagdamba", "ganesh"];
// let prabhu = vaikhunt.concat(shiv_puri);
// console.log(prabhu);
// console.log(prabhu.slice(0,4));

let arr = [1,2,3,4,5,6,7,8,9];

arr.splice(1,2,45,667,87,9,89,554);
console.log(arr); 