// Generating Random Color Using rgb by clicking the button
function randomcolor(){
	let a=Math.trunc(Math.random()*256),
	b=Math.trunc(Math.random()*256),
	c=Math.trunc(Math.random()*256),colors;
	colors="rgb("+a+","+b+","+c+")";
	document.body.style.background=colors;
	console.log(colors);
}
// Using button we are generating colors
let back=document.getElementById("but");
back.addEventListener("click",randomcolor);
// By refreshing the page the color get changed:
// randomcolor();
// Using Interval color get generated:
// setInterval(randomcolor,2000);

// Math Function for Random Colors using hexa
function random(){ 

let color=0xFFFFFF;
let random_num = Math.random() * color;
random_num = Math.floor(random_num);
random_num = random_num.toString(16);
let rand_color=random_num.padStart(6,0);
return `#${rand_color.toUpperCase()}`
}
document.write(random());
console.log(random());