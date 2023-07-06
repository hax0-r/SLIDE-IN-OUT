const bbtn = document.getElementById(`bbtn`);
const menu = document.getElementById(`menu`);
bbtn.addEventListener("click", ()=>{
  menu.classList.toggle("active");
});
