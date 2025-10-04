// array
const ages = [25, 31, 42, 77];


//multiplies all elements under 70 by 2
let myArray = ages.map(
    (element) => {
        if(element < 70){
            console.log(element * 2);
        }
    }
)

myArray.forEach(
    (item) =>{
        console.log(item);
    }
);