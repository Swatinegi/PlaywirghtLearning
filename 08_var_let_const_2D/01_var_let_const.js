var v =10; // once chnage it will be change for everyone- can be declare multiple times in the same scope
let l =20; // only declare one in a scope once scope finish it will take the vaue avilable in out of scope 
const c=30;  // value can not be chnaged and its scope specific

console.log(v, l, c);

printv();
function printv(){
    var v=100;
    console.log(v);
    if(true){
        var v =200;
        console.log(v);
    }
    console.log(v);
    var v=400;
    console.log(v);
}
console.log(v);


printl();
function printl(){
    let l=100;
    console.log(l);
    if(true){
        let l =200;
        console.log(l);
    }
    console.log(l);
    //let l=400; can be declare only once in scope - this line will throw error
    
}
console.log(l);
console.log("************");

printc();
function printc(){
    const c=100;
    console.log(c);
    if(true){
        const c =200;
        console.log(c);
    }
    console.log(c);
    // c= 400; - it will remain constant and can not be changed
    
}
console.log(c);


