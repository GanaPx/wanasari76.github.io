const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector(".input");
const searchData = document.querySelector(".search-data");

searchBtn.onclick=()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.classList.add("active");
  seachData = document.querySelector(".search-data");
  searchInput.focus();
  if(searchInput.value !=""){
  var values=searchInput.value;
  searchData.classList.remove("active");
  searchData.innerHTML="Penelusuran Anda"+"<span style='font-weight:500;'>"+ values +"</span>";
  }else{
  searchData.textContent="";
  }
}

cancelBtn.onclick=()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchInput.classList.remove("active");
  searchInput.value="";
}