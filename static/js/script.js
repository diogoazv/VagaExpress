const btn = document.getElementById("open_btn");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
});