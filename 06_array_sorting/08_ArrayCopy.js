let original = [1,2,3,4]
let copy = [...original] //created a new array - if changes in new array it wont change the original one
console.log(copy)
let copy2 = original.slice(); //created a new array- if changes in new array it wont change the original one
console.log(copy2)

let copy3 = original // if we do assignment then if we change in new array it will get chnaged in the original one 
copy3.push(100)
console.log(copy3)
console.log(original)

copy2.push(200)
console.log(copy2)
console.log(original)

copy.push(300)
console.log(copy)
console.log(original)