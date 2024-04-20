
/* Javascript Object and It,s Method */

{

    /* How To Create A Object */

    // const obj = {
    //     id: 1,
    //     Name : "Rudra",
    //     Sername : "Sutariya",
    //     Age : 20,
    //     Hobby : "Devloper"
    // }

    // console.log(obj);

    // // const Obj = new Object();

    // // console.log(Obj);

    // let data  = obj.Name; // Dote  Notation
    // let data1 = obj["Sername"]; // brecket Notation

    // console.log(data);
    // console.log(data1);

    // // /* Add Item In Object */

    // obj.address = "India";
    // console.log(obj);

    // obj.gender = "Male";
    // console.log(obj);

    // obj.id = 10;

    // console.log(obj);

}


/* Object .assign() Method */

// const obj = {
//     id: 1,
//     Name: "Rudra",
//     Sername: "Sutariya",
//     Age: 20,
//     Hobby: "Devloper"
// }

// const num = {
//     key1: 10,
//     key2: 20,
//     key3: 30,
//     key4: 40,
//     key5: 50
// }

{

    // let Assign = Object.assign(obj, num);

    // console.log(Assign);

    // console.log(obj);

    // let Assign2 = Object.assign({}, num, obj);

    // console.log(Assign2);

}


/* Object .freeze() method */

{
    const obj = {
        id: 1,
        Name: "Rudra",
        Sername: "Sutariya",
        Age: 20,
        Hobby: "Devloper"
    };

    obj.Name = "Vraj";
    console.log(obj);

    obj.id = 20;
    console.log(obj);

    let Data = Object.freeze(obj);

    console.log(obj);

    obj.id =50;

    console.log(obj);
}


/* Object . Create() Method */


{
    //  const obj = {
    //     id: 1,
    //     Name: "Rudra",
    //     Sername: "Sutariya",
    //     Age: 20,
    //     Hobby: "Devloper",
    //     newobj : function (){
    //         console.log(`My First name is ${this.Name} and Sername is ${this.Sername}`);
    //     }
    // };

    // let newobj = Object.create(obj);

    // newobj.occupation = "Devloper";

    // console.log(newobj.occupation);
    // console.log(newobj.newobj());
    // console.log(obj);
}