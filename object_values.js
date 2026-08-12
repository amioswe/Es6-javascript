// const profile={
//     name:'AMIODAS',
//     age:23,
//     adreess:'kanaipur'
// }
// const showResult=Object.keys(profile);
// console.log(showResult);

// const showResult2=Object.values(profile);
// console.log(showResult2);


// const entries=Object.entries(profile);
// console.log(entries);


const birthcetificate={
    name:'amio',
    age:23,
    nationality:'bangladeshi'
}
Object.freeze(birthcetificate);


delete birthcetificate.name;
birthcetificate.new='wejw';

console.log(birthcetificate);