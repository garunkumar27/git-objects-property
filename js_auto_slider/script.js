let auto=document.getElementById("auto"),
auto_img= ["./pic/ak.jpg","./pic/ak-2.jpg","./pic/ak-3.jpg"],x=0;
function movable(){
    x++;
    if(x<=auto_img.length){
        if(x==auto_img.length){
            x=0;
        }
        auto.src=auto_img[x];
    }
}
setInterval(movable,2000);