// Finding Html document
// 1.document.getElementById(id)
// It is used to find the elements using Id
function changes()
{
let y=document.getElementById("doc").innerHTML="Cool Buddy";
alert(y);
}

// PASSWORD CHECK
function pass(){
let x=document.getElementById("password").value;
let z=document.getElementById("con_password").value;
if(x==z){
	document.getElementById("pas").innerHTML="Password is Correct";
}
else{
document.getElementById("pas").innerHTML="Password is In-correct";
}
}
// RADIO BUTTON
function rad(){
	let eng=document.getElementById("english");
	let tam=document.getElementById("tamil");
	let mal=document.getElementById("malayalam");

	if(eng.checked)
		alert(eng.value);
	else if(tam.checked)
		alert(tam.value);
	else if(mal.checked)
		alert(mal.value);
		else
		alert("Choose Your Language")

}


// SHOPPING USING ID
function items(){
	let prod=document.getElementById("singleprice").innerText;
	// console.log(prod);
	let q=document.getElementById("quan").value,total_price;
	

	total_price=prod*q;
	// console.log(total_price);
	document.getElementById("amount").innerHTML=total_price;
	// return total_price;		
}

// let a=items();
// console.log(a);

document.getElementById("trigger").addEventListener('click',items);


//  SHOPPING USING CLASS NAME
function cal(){
	let row=this.parentNode.parentNode;
	let price_ele=row.getElementsByClassName("pro_price")[0].innerText;
	let give_ele=row.getElementsByClassName("give")[0].value;
	let amount_ele=row.getElementsByClassName("amount")[0];
	let total=price_ele*give_ele;
	amount_ele.innerHTML=total;

}
let trig=document.getElementsByClassName("trigger");
for(i=0;i<trig.length;i++){
	trig[i].addEventListener("click",cal);
}


// QUERYSELECTORALL()
const nodeList = document.querySelectorAll(".abcd");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}


//AGE CALENDAR
document.getElementById("trigger").addEventListener('click', calcu)
function calcu() {
    const check = function () {
        let dob = document.querySelector("#dob").value,
            gn_date = new Date(dob),
            gn_time = gn_date.getTime(),
            newdate = new Date(),
            newtime = newdate.getTime(),
            total = newtime - gn_time,
            sec = Math.floor(total / 1000),
            min = Math.floor(total / (1000 * 60)),
            hour = Math.floor(total / (1000 * 60 * 60)),
            day = Math.floor(total / (1000 * 60 * 60 * 24)),
            week = Math.floor(total / (1000 * 60 * 60 * 24 * 7)),
            month = Math.floor(total / (1000 * 60 * 60 * 24 * 30.45)),
            year = Math.floor(total / (1000 * 60 * 60 * 24 * 365.25));
        let call = function (x, y) {
            document.querySelector(x).innerHTML = y;
        }
        call("#year", year + "-Years");
        call("#month", month + "-Month");
        call("#week", week + "-Weeks");
        call("#days", day + "-Days");
        call("#hour", hour + "-Hours");
        call("#min", min + "-Minutes");
        call("#sec", sec + "-Seconds");

    }
    setInterval(check, 1000);
}