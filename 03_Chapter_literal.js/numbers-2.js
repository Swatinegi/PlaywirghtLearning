let decimal = 42;
console.log("Decimal:",decimal);

let binary = 0b1010;
console.log("binary:",binary);

let octal = 0o53;
let hex = 0x2A;
console.log(octal);
console.log(hex);

let float1 = 3.14;
let float2 = -0.5;
let float3 = 0.5;
let float4 = 5.0;


let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big);

