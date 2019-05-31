window.onscroll=function() {
	scroll();
	//stickit();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function scroll(){
	if(document.documentElement.scrollTop>10)
	{
		document.getElementById("myBtn").style.display="block";
	}
	else
	{
		document.getElementById("myBtn").style.display="none";
	}
}
// function stickit() {
//   if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky");
//   } else {
//   navbar.classList.remove("sticky");
//   }
// }