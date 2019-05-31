x=localStorage.clickcount;
function inc() {
  if (typeof(Storage) !== "undefined") {
    x++;
    localStorage.clickcount=x;
    document.getElementById("abc").innerHTML = "Numbber of likes are: "+x;
  } else {
    document.getElementById("abc").innerHTML = "localStorage not supported";
  }
} 

function reset(){
  x=0;
  localStorage.clickcount=0;
  document.getElementById("abc").innerHTML="";
}