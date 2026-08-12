// const profile=(name)=>`Hello everyone i am ,${name}das.Good Afternoon.`
// console.log(profile('amio'));



// const sumNumberbymultipleby5= (a,b) =>{
//     let sum=a+b;
//     let multiple=sum*5;
//     return multiple;

// }

// console.log(sumNumberbymultipleby5(23,43));



const student={

    name:'Amiodas',
    age:23,
    num:322342,
    adress:'kanaipur',

    showdetails:function(){
        return ` My Name is : ${this.name}.And my age is : ${this.age}.`

    }
};

console.log(student.showdetails());
