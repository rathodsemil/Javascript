
/* Javascript Array And It'S Method */

{
    let array = ["a", "b", "c", "d", "e"];

    let newarry = new Array("a", "b", "c", "d", "e");

    console.log(array);

    console.log(newarry);

    console.log(array.length);

    console.log(newarry.length);

    console.log(typeof array);

    console.log(typeof newarry);

}

{
     let array = [20];

     let newarry = new Array(20);

     console.log(array);

     console.log(newarry);

     console.log(array.length);

     console.log(newarry.length);
}

{
    let array = [46,"Java",true,undefined,null];

    console.log(array);

    console.log(array.length);

    console.log(array[2]);

    /* Arry Push Method */

    array.push("Rudra");
    array.push("Nick");

    console.log(array);

    /* Arry Unshift Method */

    array.unshift("Row");
    array.unshift("Columns");

    console.log(array);

    /* Arry Pop Method */

    array.pop();
    array.pop();
    array.pop();
    array.pop();

    console.log(array);

    /* Arry Shift Method */

    array.shift();
    array.shift();

    console.log(array);

    /* Arry ToString Method */

    let string = array.toString();

    console.log(string);

    /* Arry Reverce Method */

    let Rever = array.reverse();

    console.log(Rever);

    /* Arry Concat Method */

    {
        let array1 = ["Rudra","Dishant"];

        let array2 = ["Vraj","Priyank"];

        let array3 = ["Shivani"];

        let newArray = array1.concat(array2, array3);

        console.log(newArray);
    }
}