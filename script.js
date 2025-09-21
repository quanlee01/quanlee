function eat()
{
  alert("nhớ ăn cơm nghaennn");
  an.style.display = "none";
  return;
}
const an = document.getElementById("an");
an.addEventListener("click",eat);
let noCnt = 1;
let shown = Boolean(0);
function yes() 
{
  an.style.display = "block";
  shown = 1;
  return;
}
let scale = 1;
function no()
{
  if(noCnt < 3) 
  {
    co.style.transform = `scale(${scale*=1.5})`;
    noCnt++;
    return;
  }
  else if(!shown)
  {
    an.style.display = "block";
    noCnt = 0;
  }
  return;
}

const khong = document.getElementById("no");
khong.addEventListener("click",no);
const co = document.getElementById("yes");
co.addEventListener("click",yes);