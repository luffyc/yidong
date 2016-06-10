//banner轮播
$(function(){
	var box=$(".banner-middle")[0];
	var img=$(".img")[0];
	var imgs=$(".imgs");
	var circles=$(".circle");
	var left=$(".left")[0];
	var right=$(".right")[0];
	var n=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(type){
		if(!flag){
			return;
		}
		flag=false;
		if(type=="l"){
			n--;
			if(n<0){
				n=imgs.length-1;
			}
		}else{
			n++;
			if(n>=imgs.length){
				n=0;
			}
		}
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},400);
            circles[i].style.background="#D0D2D3";
		}
        circles[n].style.background="#E71E6A";
        animate(imgs[n],{opacity:1},400,function(){
            flag=true;
        });
	}
	for(var i=0;i<imgs.length;i++){
		circles[i].index=i;
		circles[i].onmouseover=function(){
                for(var i=0;i<circles.length;i++){
                	animate(imgs[i],{opacity:0},400);
	        		circles[i].style.background="#D0D2D3";
	        	}
	        	circles[this.index].style.background="#E71E6A";
                animate(imgs[this.index],{opacity:1},400);
	            n=this.index;
		}
	}
	box.onmouseover=function(){
		clearInterval(t);
		left.style.display="block";
		right.style.display="block";
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
		left.style.display="none";
		right.style.display="none";
	}
	left.onclick=function(){
		move("l");
	}
	right.onclick=function(){
		move();
	}
    



        var box2=$(".lb")[0];
		var dk=$(".picture-box")[0];
		var kuan=$(".lb-picture")[0];
		var left2=$(".left2")[0];
		var right2=$(".right2")[0];
		var w=parseInt(getStyle(kuan,"width"));
        var t2=setInterval(move2,3000);
        var flag2=true;
        function move2(){
        	if(!flag2){
        		return;
        	}
        	flag2=false;
            var f=getFirst(dk);//取大框的第一个小框
            animate(dk,{left:-w},500,function(){
                dk.appendChild(f);//将第一个小框插到最后
            	dk.style.left=0;//把大框拉回原位
            	flag2=true;
            });//让大框往左走一个小框的宽 
        }
        function move3(){
        	if(!flag2){
        		return;
        	}
        	flag2=false;
            var f=getFirst(dk);//取大框的第一个小框
            var l=getLast(dk);//取最后一个小框
            dk.insertBefore(l,f);//将最后一个小框插到第一个小框前面
            dk.style.left=-w+"px";//让大框往左走一个小框的宽
            animate(dk,{left:0},500,function(){
            	flag2=true;
            }); 
        }
        box2.onmouseover=function(){
        	clearInterval(t2);
        	left2.style.display="block";
		    right2.style.display="block";
        }
        box2.onmouseout=function(){
            t2=setInterval(move2,3000);
            left2.style.display="none";
		    right2.style.display="none";
        }
        left2.onclick=function(){
        	move2();
        }
        right2.onclick=function(){
        	move3();
        }


        //导航下拉菜单
    var dh=$(".nav-lis");
    var hidden=$(".hidden");
    for(var i=0;i<dh.length;i++){
    	dh[i].index=i;
    	dh[i].onmouseover=function(){
            hidden[this.index].style.display="block";
    	}
    	dh[i].onmouseout=function(){
            hidden[this.index].style.display="none";
    	}
    }


    //登录
    var comein=$("#right4");
    var login=$(".login")[0];
    comein.onmouseover=function(){
    	login.style.display="block";
    }
    comein.onmouseout=function(){
    	login.style.display="none";
    }

    //二维码
    var phone=$("#right3");
    var wm=$(".wm")[0];
    phone.onmouseover=function(){
    	wm.style.display="block";
    }
    phone.onmouseout=function(){
    	wm.style.display="none";
    }
})
