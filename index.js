window.onload=function(){
    var items=document.getElementsByClassName("item");
    var circles=document.getElementsByClassName("circle");
    var prev=document.querySelector(".prev")
    var next=document.querySelector(".next")
    var banner=document.querySelector(".banner");
    var index=0;
    var timer=null;
    //清除格式
    var clearclass=function(){
        for(let i=0;i<items.length;i++){
            items[i].className="item";
            circles[i].className="circle";
            circles[i].setAttribute("num",i);
        }
    }
    //实现每个图片对应每个圆点进行对应的显示
    function move(){
        clearclass();
        items[index].className="item active";
        circles[index].className="circle active";
    }
    //设置右移的点击事件
    next.onclick=function(){
        if(index<items.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }
    //设置左移的点击事件
    prev.onclick=function(){
        if(index<items.length){
            index--;
        }
        else{
            index=items.length-1;
        }
        move();
    }
    //设置一般状态下的自动轮播
    timer=setInterval(function(){
        next.onclick();
    },1500);
    //设置当前点击圆点时跳转相应图片
    for(let i=0;i<items.length;i++){
        circles[i].addEventListener("click",function(){
            var point_index=this.getAttribute("num");
            index=point_index;
            move();
        })
    }
    //设置鼠标移入banner函数
    banner.onmouseover=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            next.onclick();
        },3000);
    }
    //鼠标移出banner函数
    banner.onmouseleave=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            next.onclick();
        },1500);
    }
}