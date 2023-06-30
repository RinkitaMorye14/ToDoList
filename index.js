let input = document.getElementById("input");
let list = document.getElementsByClassName("list")[0];

function addTask() {
  if (input.value == "") 
  {
    input.classList.add("error");
    setTimeout(()=>{
        input.classList.remove("error");
      },1000);
  } 
  else 
  {
    console.log("Input Detected");
    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `
      <div class="txt">
        <span class="check">
          <i class="fa-regular fa-circle fa-lg unchecked" style="color: #ff9595"></i>
          <i class="fa-solid fa-badge-check fa-circle fa-lg checked" style="color: #ff95ac; display:none;"></i>
        </span>
        <span class="txt_tsk">${input.value}</span>
      </div>
      <div class="icon">
        <i class="fa-solid fa-xmark fa-xl " style="color: #8000ff;"></i>
      </div>
    `;
    list.appendChild(row);
    input.value = ""; // Clear the input value after adding the task

    const unchecked = row.querySelector(".unchecked");
    const checked = row.querySelector(".checked");
    const txt_tsk = row.querySelector(".txt_tsk");
    const icon = row.querySelector(".icon");

    checked.addEventListener("click", function() {
      unchecked.style.display = "";
      checked.style.display = "none";
      txt_tsk.style.textDecoration = "";
      console.log("Display Hidden");
    });
    unchecked.addEventListener("click", function() {
      checked.style.display = "";
      unchecked.style.display = "none";
      txt_tsk.style.textDecoration = "line-through";
      console.log("Display Hidden");
    });
    list.addEventListener("click", (e) => {
        if (e.target.classList.contains("fa-xmark")) {
          e.target.parentElement.parentElement.remove();
        }
      });   
  }
}
