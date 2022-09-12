// Entering the Date directly.
let dob = new Date("02/27/2000"), 
time=dob.getTime(); 
// console.log(time);
let total = Date.now() - time;
// console.log(total);   
let age_cal = new Date(total);
// console.log(age_cal);
let year = age_cal.getUTCFullYear();
// console.log(year);
let age = Math.abs(year - 1970); 
console.log("Age :"+age); 
document.write("Age is:"+age);