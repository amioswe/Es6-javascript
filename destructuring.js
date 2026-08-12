// const array=[12,43,54,76,77];
// const [baro,tittalish, , ,satattur]=array;
// console.log(baro,tittalish,satattur);




//object create desstructuring------>>>>>

const profile={
    name:'AMIO',
    age:23,
    grade:4,

    marks: {
     physics:213,
     biology:333,
     maths:34

    }
}
const {name,age,marks:{physics,biology}}=profile;
console.log(name,age,physics,biology);

