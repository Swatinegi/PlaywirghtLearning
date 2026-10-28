const sum = (a,b) => (a+b)
console.log(sum(10,20))


const validate_pass = (pass) =>{
    if(pass >=33 ){
        return("Passed")
    }
    else{
        return("Failed")
    }
}
console.log(validate_pass(44))