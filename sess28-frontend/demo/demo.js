//khai bao
const person={
    name1:"Nguyen Quang Huy",
    age:18  ,
    address: "Ha Dong-Ha Noi"
}
const animal=new Object();
animal.animalName = "Dog"
animal.color="Black"

//truy cap vao obj
//cach 1(dung dau ".")
console.log("name1: ",person.name1)
console.log("age: ",person.age);
console.log("address: ",person.address);

const typeSearch = 'age'

//cach 2(Dung "[]")
console.log("name1: ",person["name1"])
console.log("age: ",person[typeSearch]);
console.log("address: ",person["address"]);

//cach 3: Destructuring
const{name1,age,address}=person
console.log("name1: ",name1)
console.log("age: ",age);
console.log("address: ",address);

//them key value vao trong obj
person.email = "WanggHuy@gmail.com"//them email
person.gender = "Nam"//them age
console.log("Email: ",person.email);
console.log("Gender: ",person.gender);

//xoa key
// delete person.name1;//xoa name
// delete person.address//xoa address
// console.log("person sau khi xoa :",person);

//Duyet qua obj for(in)          
for(const key in person){
    console.log("Key:",person[key]);
}

//lay ra key trong obj va chuyen thanh mang
console.log("Danh sach key cua person: ",Object.keys(person));

//lay ra value trong obj va chuyen thanh mang
console.log("Danh sach value cua person: ",Object.values(person));

const students={
    id: 1,
    studentsName: 'Nguyen Van A',
    age: 22
}