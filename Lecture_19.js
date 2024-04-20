
/* Javascript Call Back Function */

{
    // function(){}
    // function myFunction(){
    //     console.log("Hello World");
    // }


    // function hey(){
    //     console.log("Hello");
    // }

    // function sum(a,b, Callback){
    //     Callback()
    //     return console.log(a + b);
    // }

    // console.log(sum(20,10,myFunction));
    // console.log(sum(50,10,hey));
}

/* Javascript Arrow Function */

{

    // function rudra(){
    //     console.log("Rudra");
    // }

    // rudra();

    // const num = () => {
    //     return console.log("THis is Arrow Function");
    // }

    // num();

    // const foo = (a,b) => {
    //     return console.log(a + b);
    // }

    // foo(20,10);

}

/* Function As Constructor */

/* 1 types */
// function sum(){
// }

/* 2 types*/

// const New = () {};

// const result = new Function("x","y","return x + y");

// console.log(result(50,10));


/* Function,Length */

{
    // function sum(a,b,c,o,x,y,z) {
        
    // }

    // console.log(sum.length);
}

/* Function.toString */

{
    // function sum(a,b){
    //     return a + b;
    // }

    // console.log(sum.toString());
}

/* Function.name()  is*/

// const sum = () => {}

// console.log(sum.name());

// const hello = function () {}

// console.log(hello.name);

/* Function Apply Method */

{
    // function sum(a,b,c){
    //     return a +  b + c;
    // }

    // let result = sum.apply(null, [10,25,50]);

    // // console.log(sum(20,10));
    // console.log(result);

    // const max = Math.max.apply(null, [20,15,85,75,101]);
    // const min = Math.min.apply(null, [20,15,85,75,101]);

    // console.log(max);
    // console.log(min);
}

/* Apply Arg With Loop */

{
    // function sum(){
    //     let sum = 0;
    //     for (let i = 0; i < arguments.length; i++) {
    //         sum += arguments[i];
    //     }
    //     return sum;
    // }

    // function sum2(){
    //     let sum = 0;
    //     for (let i = 0 ; i < arguments.length; i++) {
    //         if (i%2 == 0) {
    //             sum += arguments[i];
    //         }
    //     }
    //     return sum;
    // }

    // let result = sum2.apply(null, [20,10,85,22]);

    // console.log(result);

}
