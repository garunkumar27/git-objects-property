function rows(){
let row=this.parentNode.parentNode;
// console.log(row);
let pro=row.getElementsByClassName("pro-price")[0].innerText;
let qty=row.getElementsByClassName("give")[0].value,total_amount;
let price_ele=row.getElementsByClassName("amount")[0];
total_amount=pro*qty;
price_ele.innerHTML=total_amount;
}

let but_call =document.getElementsByClassName("trigger");
for(i=0;i<but_call.length;i++){
but_call[i].addEventListener('click',rows);
}
