var head=document.querySelector("#head");
var cont=document.querySelector("#content1");
var bts=head.querySelectorAll("button");
var divs=cont.querySelectorAll("div");
for (var i=0;i<bts.length;i++) {
	bts[i].id=i;
	bts[i].onclick=function  () {
		for (var j=0;j<divs.length;j++) {
			divs[j].style.opacity="0";
		}
		divs[this.id].style.transitionDuration="3s";
		divs[this.id].style.opacity="1";
		divs[this.id].style.animationName="myshow";
	}
}

var first=document.querySelector("#first-box");
var first_bt=document.querySelector("#first-box>button");
first_bt.onclick=function  () {
	first.style.height="0px";
	first.style.transitionDuration="2s";
}