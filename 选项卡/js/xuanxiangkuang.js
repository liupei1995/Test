var nav=document.querySelector("#nav");
var myli=nav.querySelectorAll("li");
var mydesc=document.querySelectorAll(".desc");
	for (var i=0;i<myli.length;i++) {
		myli[i].id=i;
		myli[i].onmouseover=function  () {
			for (var j=0;j<myli.length;j++) {
				myli[j].className="";
				mydesc[j].style.display="none";
			}
			this.className="select";
			mydesc[this.id].style.display="block";
		}
	}
