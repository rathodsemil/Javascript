
/* Javascript Objects */


//  object is a non-primitive data-type that allows you to store multiple collections of data.
//  An object is a collection of properties, and a property is an association between a name (or key) and a value.
//  A property's value can be a function, in which case the property is known as a method.
//  Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.
//  The Object type represents one of JavaScript's data types.
//  It is used to store various keyed collections and more complex entities.
//  Objects can be created using the Object() constructor or the object initializer / literal syntax.

// =>  object ni ander string keys j use kri sko..and new Map ni ander bdhi j keys like boolean number....

// object = {property1:value1,property2:value2.....propertyN:valueN}

/* Javascript Simple Example */

{
    // let Deatil = {
    //     Fname : "Rudra",
    //     Lname : "Sutariya",
    //     Class : "SkillCode",
    //     Course : "Frontend Developer",
    // }

    // console.log(Deatil);
    // // // . Notes Methods
    // console.log(Deatil.Fname);
    // // // [] Notes Methods
    // console.log(Deatil["Lname"]);
}

/* Javascript Object Declaration */

{
    // const object_name = {
    //     key1:"value1",
    //     key2:"value2",
    //     key3:"value3",
    // }

    // console.log(object_name);
    // console.log(typeof object_name);
}

/* Nested Object in Javascript */

{
    // const myObj = {
    //     Name : "Rudra",
    //     Age : 20,
    //     vegitables : {
    //         apple : 80,
    //         banana : 50,
    //         chiku : 20, 
    //         users:{
    //             name1 : "Nick",
    //             name2 : "harsh",
    //             name3 : "Nikil",
    //             name4 : "Raju",
    //             id:{
    //                 1 : "Frontend Devloper",
    //                 2 : "Backend Devloper",
    //                 3 : "Fullstack Devloper",
    //                 4 : "Flutter Devloper",
    //                 5 : "Ui & Ux Design Devloper",
    //             }
    //         }
    //     }
    // }

    // console.log(myObj);
    // console.log(myObj.vegitables.users.name4);

    // console.log(myObj);
    // console.log(myObj.vegitables.users.id[5]);
}

/* Javascript Object Method */

// javascript Object.assign()  = bdha object ne merege krva...
// Javascript Object.create()   = //constructor method kevay eni ander j singleton bne.. koi pn changes na krvo hoi tyre..
// JavaScript Object.entries() = key ane values bne pair ne ek ek array ma muke
// JavaScript Object.is()     =   bey value srkhi hoi to true
// JavaScript Object.hasOwnProperty() = check kre obje ma properties che ke ny true / false
// JavaScript Object.freeze()  =  freeze kri dey modify thavathi atkaave
// JavaScript Object.getOwnPropertyNames() = bdhi j key nee array ma muke
// Javascript Object.setPrototypeOf() = bija object pr set kre....
// JavaScript Object.toString() = Object.toString() always returns the object constructor.
// JavaScript Object.valueOf() = returns the primitive value of an object.
// JavaScript Object.values() = only values print karava mate...
// JavaScript Object.keys() = only keys print karava mate...
// JavaScript Object.greet() = prints the greeting of an object 
// Javascript Object.Isforzen() = returns true if the object is freeze.
// JavaScript Object.seal() = returns object ne seal keri ape che em koy pan value athva delete kari sakay nahi ...
// JavaScript Object.hasOwn() = returns true if the object has a property with the same name as the object property value ..
// JavaScript Object.groupBy() =filter jevu kam kari ape che ...



/* Object . Assign Method */

// Syntax:-
// Object.assign(target, ...sources) //parameter

//  1. JavaScript Object.assign()

// const x = { Name: "Rudra", Age: 20 };
// const y = { Course: "FrontEnd Devloper" };
// const z = { Company: "Krum Infotech" };

// let myObj = Object.assign(x, y, z);

// console.log(myObj);

// //  create source object
// const obj = {
//     name: "kishan bhalala",
//     age: 25,
// };


// // //  create target object
// let newObject = {};

// const copy = Object.assign(newObject, obj);

// console.log(copy);
// console.log(newObject);


// 2. --- Javascript Object.create() ---

{
    // let obj = Object.create({
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    // });

    // obj.Email = "rudrasutariya003@gmail.com";
    // console.log(obj);

    // let obj = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    //     display() {
    //         console.log(`My Name is ${this.Fname} And My Class Name is ${this.Class} and My Course Name is ${this.Course}`);
    //     }
    // };

    // // // create object from Student prototype
    // let data  = Object.create(obj);
    // data.Fname = "Rudra";
    // data.Class = "SkillCode";
    // data.Course = "Frontend Developer";
    // data.display();


    // let New = {
    //     Product_name : "laptop",
    //     Product_price : 10000,
    //     product_brand : "Dell",
    //     product_owner : "Rudra",
    //     Data(){
    //         console.log(`Hello Everyone My Product Name is ${this.Product_name} And My Product Rate is ${this.Rate} This Product Owner By ${this.Product_owner}.`);
    //     }
    // }

    // let data = Object.create(New);
    // data.Product_name = "HP";
    // data.Rate = "5 STAR";
    // data.Product_owner = "Rudra";
    // data.Data();

}

// 3. --- JavaScript Object.entries() ---


{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    // }

    // console.log(Object.entries(Deatils));
}

// keys are arranged randomly:-

{
    // const obj = { 100: "f", 50: "e", 5: "d",45: "c", 99: "b", 2: "a" };

    // // // returns key-value pairs arranged
    // // // in ascending order of keys

    // console.log(Object.entries(obj));
}

// entries() to Iterate Through Key-Value Pairs:-

{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    // };

    // for (const [val,key] of Object.entries(Deatils)){
    //     console.log(`${val} => ${key}`);
    // }
}

// 4. --- JavaScript Object.is() ---

{
    // let obj = { a: 50, b: 10 };

    // let news = { x: "50" };

    // console.log(Object.is(obj, obj));
    // console.log(Object.is(news, news));
}

//  Javascript Object.is()

{
    // //objects with same values
    // console.log(Object.is("Hello", "Hello"));

    // // objects with different values
    // console.log(Object.is("Hello", "hello"));

    // // compare null values
    // console.log(Object.is(null, null));
}

// // is() With Custom Objects

{
    // let obj = {a : 50};

    // let obj1  = {a : 50,  b : 5};

    // console.log(Object.is(obj, obj));

    // console.log(Object.is(obj1, obj1));
}


// is() With Special Cases

// console.log(Object.is([],[])); // False

// console.log(Object.is(0 , -0)); // False

// console.log(Object.is(-1 , -1)); // True

// console.log(Object.is(NaN , "hello" * 50)); // True


// 5. --- JavaScript Object.hasOwnProperty() ---

{
    // const obj = {};
    // obj.name = "Rudra";
    // obj.country = "India";
    // console.log(obj);

    // // // Cheak If Name Is Present in Object Or Not
    // console.log(obj.hasOwnProperty("name")); // True
    // console.log(obj.hasOwnProperty("Country")); // True
}

{
    // Create an object with properties id
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    //     id: 101
    // };

    // // //Cheak If Name Is Present in Object
    // console.log(Deatils.hasOwnProperty("Fname"));

    // // //inherited properties return false
    // console.log(Deatils.hasOwnProperty("Id"));
}

// 6. --- JavaScript Object.freeze() ---
{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    // };

    // // freeze the obj object
    // Object.freeze(Deatils);
    // console.log(Deatils);

    // //changes will fail silently
    // Deatils.Fname = "Pinku";
    // console.log(Deatils.Fname);

    // // cannot add a new property
    // Deatils.Class = "Happy";
    // console.log(Deatils.Class);

    // // cannot Delete a  property
    // delete Deatils.Fname;
    // console.log(Deatils);


}

// 7. --- JavaScript Object.getOwnPropertyNames() ---

{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "",
    // };

    // // // find out the properties present in obj
    // const propertyName = Object.getOwnPropertyNames(Deatils);

    // console.log(propertyName);
}

// 8. --- Javascript Object.setPrototypeOf() ---

{
    // create an empty object
    // const obj = {};

    // // // create a non-empty object parent
    // const para = { name: "rudra", age: 20 };

    // // // set parent as the prototype of obj
    // Object.setPrototypeOf(obj, para);

    // console.log(obj.name);
    // console.log(obj.age);

}

// 9. --- JavaScript Object.toString() ---

// let Deatils = {
//     Fname: "Rudra",
//     Lname: "Sutariya",
//     Class: "SkillCode",
//     Course: "Frontend Developer",
//     age: 20
// };

// const hey = Object.toString(Deatils);
// console.log(hey);

// 10. --- JavaScript Object.valueOf() ---

{
    // let number = new Number(50);

    // console.log(number);
    // console.log(number.valueOf());
}

// 11. --- JavaScript Object.values() ---
{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    //     age: 20
    // };

    // // print the enumerable values of obj
    // console.log(Object.values(Deatils));

}

// values() With Object Having Random Key Ordering
{
    // const obj = { 20: "B", 2: "C", 65: "D", 98: "A" };

    // // print the enumerable values of obj
    // console.log(Object.values(obj));

}

// JavaScript Object.values() With String

{
    // const data = "Hello Rudra";

    // console.log(Object.values(data));

}

// 12. --- JavaScript Object.Keys() ---

{
    // let Deatils = {
    //     Fname: "Rudra",
    //     Lname: "Sutariya",
    //     Class: "SkillCode",
    //     Course: "Frontend Developer",
    //     age: 20
    // };

    // // print the enumerable keys of obj
    // console.log(Object.keys(Deatils));
}

// 13. --- JavaScript Object.Isfozen() ---

{
    // let newobj = {
    //     name: "Rudra",
    //     age: 20,
    //     email: "Rudrasutariya003@gmail.com",
    //     course: "Frontend Developer",
    // };

    // newobj.name = "Vinay";

    // delete newobj.name;

    // Object.freeze(newobj);

    // newobj.age = 40;

    // delete newobj.age;

    // let data = Object.isFrozen(newobj);

    // console.log(newobj);

    // console.log(data);

}

// 14. --- JavaScript Object.seal() ---

{
    // let newobj = {
    //     name: "Rudra",
    //     age: 20,
    //     email: "Rudrasutariya003@gmail.com",
    //     course: "Frontend Developer",
    // };

    // Object.seal(newobj);

    // delete newobj.age;

    // newobj.age = 50;

    // console.log(newobj);

    // let data = Object.isSealed(newobj);

    // console.log(data);

}

// 15. --- JavaScript Object.hasOwn() ---

{
    // let obj = {
    //     first : "Html",
    //     second : "Css",
    //     third : "Javascript",
    //     four : "React",
    //     five : "Php"
    // };

    // let data = Object.hasOwn(obj , "four");

    // console.log(data);

    // console.log(obj.hasOwnProperty("hgffs"));
}

// 15. --- JavaScript Object.groupBy() ---

{
    // let Grosserys = [
    //     {name : "mango", type : "fruit",price : 1500, quantity : 10},
    //     {name : "Apple", type : "fruit",price : 150, quantity : 5},
    //     {name : "fish", type : "meat",price : 2500, quantity : 2},
    //     {name : "pototo", type : "vegetable",price : 200, quantity : 0},
    //     {name : "tomato", type : "vegetable",price : 350, quantity : 25}
    // ];

    // console.log(Grosserys);

    // let data = Object.groupBy(Grosserys , ({name}) => name);

    // console.log(data);

    // let data1 = Object.groupBy(Grosserys , ({type}) => type);

    // console.log(data1);


    // function prize({price}){
    //     return price <= 200 ? "No Discount Here " : "50% Discount Here"
    // }


    // let data2 = Object.groupBy(Grosserys , prize);

    // console.log(data2);

}





/* Prectice With Rudra */

// --- for in loop ---

{
    // let newobj = {
    //     name : "Rudra",
    //     age : 20,
    //     email : "Rudrasutariya003@gmail.com",
    //     course : "Frontend Developer",
    //     Brand : "Daku",
    // };

    // for(let key in newobj) {
    //     document.write(newobj[key] + "<br>");
    // }
}

{
    // {
    //     var a = {
    //         fname: 'rudra',
    //         lname: 'sutariya',
    //         age: 20,
    //         email: 'rudrasutariya003@gmail.com',

    //         //create array

    //         favmovie: ["RRR", "KGF", "PUSPA","Salar"],

    //         //create function
    //         fees: function () {
    //             return 250;
    //         },

    //         fullname: function () {
    //             return this.fname + " " + this.lname;
    //         }
    //     }
    //     document.write(a.favmovie[0] + "<br>");
    //     document.write(a.fees() + "<br>");
    //     document.write(a.fullname());
    // }
}

/* Object */

{
    // var x = {
    //     Name: "Rudra",
    //     City: "Surat",
    //     Age: 20,
    //     Hobby: "Devloper",

    //     //Arry
    //     //         0          1        2
    //     newarry: ["Hunter", "Mafia", "Daku"],

    //     //Function
    //     Subscribe: function () {
    //         return 10000;
    //     },

    //     Deatils: function () {
    //         return this.Name + " " + this.Hobby;  // Ahi uper No Object ni value Print kare che.
    //     }
    // }
    // console.log(x.newarry[0]);
    // console.log(x.Subscribe());
    // console.log(x.Deatils());
}



// --- add a key/value pair to an object ---


{
    // var x = {
    //     Name: "Rudra",
    //     City: "Surat",
    //     Age: 20,
    //     Hobby: "Devloper",
    // }
    // x.number = 8849498140;
    // console.log(x);
}

// --- Object New ---

{
    // let news = {
    //     name : "Rudra",
    //   city : "Surat",
    //   number : 8849498140,
    //   newarry : ["Hunter","Gaming","Mafia","Daku"],
    //   data : function(){
    //     return 15000;
    //   }
    // }

    // console.log(news);
    // console.log(news.newarry[2]);
    // console.log(news.data());
}

// --- add object pair ---

// let x = new Object();

// x.newname = "Rudra";
// x.sername = "Sutariya";

// console.log(x.newname);
// console.log(x.sername);