
/* Javascript Arrry Method */

/* 
Shift
filter
Map
Indexof
LastIndexOf
Slice
Splice
Sort
Copywithin
entries()
keys()
values()
*/

/* Shift Method In Arrry */

{
    // let Arrry = ["html", "json","css","JavaScript", " Jquery"];

    // console.log(Arrry);

    // Arrry.shift()
    // Arrry.shift()
    // Arrry.shift()

    // console.log(Arrry);

    // console.log(Arrry.length);
}

/* Filter Method in Arrys */

// let Arrryobject = [
//     {id:1 , name:"Iphone15",item:"Phone",color:"green",prize:"100000",discount:"5%",storage:"256Gb"},
//     {id:2 , name:"Iphone14",item:"Phone",color:"white",prize:"80000",discount:"20%",storage:"128Gb"},
//     {id:3 , name:"Iphone13",item:"Phone",color:"gray",prize:"60000",discount:"10%",storage:"256Gb"},
//     {id:4 , name:"Iphone13",item:"Phone",color:"green",prize:"40000",discount:"5%",storage:"128Gb"},
//     {id:5 , name:"Iphone14",item:"Phone",color:"silver",prize:"20000",discount:"20%",storage:"256Gb"},
//     {id:6 , name:"Iphone15",item:"Phone",color:"green",prize:"10000",discount:"10%",storage:"128Gb"},

//     {id:7 , name:"Dell",item:"laptop",color:"gray",prize:"99000",discount:"10%"},
//     {id:8 , name:"Dell",item:"laptop",color:"green",prize:"45000",discount:"5%"},
//     {id:9 , name:"Dell",item:"laptop",color:"blue",prize:"55000",discount:"10%"},
//     {id:10 , name:"Dell",item:"laptop",color:"gray",prize:"99000",discount:"10%"},
//     {id:11 , name:"Macbook",item:"laptop",color:"green",prize:"45000",discount:"5%"},
//     {id:12 , name:"Dell",item:"laptop",color:"gray",prize:"55000",discount:"10%"},
    
// ];

// let filters = Arrryobject.filter((item) => item.prize == 40000);

// let filters1 = Arrryobject.filter((item) => item.prize >= 40000 && item.color == "green" && item.item == "Phone");

// let filters2 = Arrryobject.filter((item) => item.prize >= 40000 && item.color == "green" || item.item == "Phone");

// console.log(filters);
// console.log(filters1);
// console.log(filters2);

// let filters3 = Arrryobject.filter((item) => item.item == "laptop" && item.name == "Dell" && item.color == "gray"); 

// console.log(filters3);


/* Map Method in Array */

{
    // let number = [10,50,88,45,60,20];

    // let map = number.map((item) => item == 50 || item == 60);

    // console.log(map);
}

/* Indexof and Lastindexof In arrray */

{
    // let Array = ["html","css","js","jquery","boostrap","js","react.js"];

    // let index = Array.indexOf("css",1);

    // let index2 = Array.lastIndexOf("js",2);

    // // console.log(index);
    // console.log(index2);
}

/* Slice And Splice Method in Arry */

{
    // let Array = ["html","css","js","jquery","boostrap","js","react.js"];
    
    // let slice = Array.slice(3,6);

    // let splice = Array.splice(2,2,"html" ,"css");

    // console.log(slice);
    // console.log(splice);
    // console.log(Array);
}


/* Sorting In Array */

{
    /* Array Short */
    // let Array = ["html","css","js","jquery","boostrap","js","react.js"];

    // let newarr = Array.sort();

    // console.log(newarr);

    // /* Array Number */
    // let number = [50,0,40,85,45,77,99,20,65,45];

    // let num = number.sort((a,b) => a - b);

    // console.log(num);

}


/* Entries() keys() And Values() Method In Array */

{
    // let Array = ["html","css","js","jquery","boostrap","js","react.js"];

    // /* Array Entries */
    // let entries = Array.entries();

    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);

    // /* Array Keys */
    // let keys = Array.keys();

    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);

    // /* Array Values */

    // let values = Array.values();

    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
}

/* Copywithin In Array */

{
    let Array = ["html","css","js","jquery","boostrap","js","react.js"];

    console.log(Array);

    let copy = Array.copyWithin(3);

    console.log(copy);
    
    let copy2 = Array.copyWithin(2,5);

    console.log(copy2);
        
    let copy3 = Array.copyWithin(2,4,7);

    console.log(copy3);
}
