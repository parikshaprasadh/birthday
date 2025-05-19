function switchImage(){
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
  
if (img1 && img2) {
img1.classList.remove("visible");
img2.classList.add("visible");
}
  
if (img3 && img4) {
img3.classList.remove("visible");
img4.classList.add("visible");
}
}
