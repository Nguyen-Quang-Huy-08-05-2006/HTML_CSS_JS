const addWeb = document.getElementById("btn-add");
const listWeb = document.getElementById("web-favourite");
let webs = JSON.parse(localStorage.getItem("task")) || [];
function renderWeb() {
    listWeb.innerHTML = "";
    webs.forEach((web, index) => {
        
    });
}
addWeb.addEventListener("click", function () {
    
})