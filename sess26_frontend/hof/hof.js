const greet = (name, callback)=>{
    console.log(`Hello ${name}`);
    
    callback();
}

const sayHello=()=>{
    console.log("Say Hello");
    
}

greet("Quang Huy",sayHello)

const readnumber =()=>{
    for (let i=0;i<=10;i++){
        console.log(i);
        
    }
}

const renderNumber=(callback)=>{
    callback();
}
renderNumber(readnumber)