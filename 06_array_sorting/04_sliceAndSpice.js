let arr = [1,2,3,4,5]
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1,3))
console.log(arr.slice(2))

console.log(arr.slice(-2))

// negative indexing is also there 
// it will alsways goes from left to right

console.log(arr.slice(-5,-3))