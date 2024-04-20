/* Javascript Nested loops */

/* 
    for(initi; condition; afterthought){
        for(initi; condition; afterthought){
    }
}

*/

// for(let i = 0; i < 10 ; i++) {
//     console.log(`${i} Hello Main loop`);
//     for(let j = 0; j < 5 ; j++) {
//         console.log(`${j} Hello Inner loop`);
//     }
// }


/* Javascript Break Statements */

// for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main loop`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`${j} Hello Inner loop`);
//         if (j == 2) {
//             break;
//         }
//     }
// }


// loops:for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main loop`);
//     for (let j = 0; j < 5; j++) {
//         if (i == 2) {
//             break loops;
//         }
//         console.log(`${j} Hello Inner loop`);
//     }
// }


/* Javascript Contiune Statements */


// for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main loop`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`${j} Hello Inner loop`);
//         if (j == 2) {
//             continue;
//         }
//     }
// }

/* Javascript For...In loops */

// let myobj = {fname:'Rudra',lname:'Sutariya',age:20,city:'Surat'};

// let date1 = myobj.fname
// let date2 = myobj.lname
// let date3 = myobj.age
// let date4 = myobj.city

// // console.log(date1);
// // console.log(date2);
// // console.log(date3);
// // console.log(date4);

// console.log(myobj);

// for (let key in myobj) {
//     console.log(`${key} => ${myobj[key]}`);
// }


/* Javascript For....of  Loops*/

// let newarry =  ["Rudra","Sutariya",19,"Surat","Gaming"];


// let date5 = newarry[0];
// let date6 = newarry[1];
// let date7 = newarry[2];
// let date8 = newarry[3];
// let date9 = newarry[4];

// // console.log(date5);
// // console.log(date6);
// // console.log(date7);
// // console.log(date8);
// // console.log(date9);

// for(let value of newarry) {
//     console.log(`${value}`);
// }


let string = "Hunter Gaming";

for(let char of string) {
    console.log(char);
}

