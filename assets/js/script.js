document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("option").addEventListener("click", show_left_bar);

let side_menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let body = document.getElementById("body");
let option = document.getElementById("option");
let title_sidebar = document.getElementById("name_page");

//Mostrar y ocultar menu
function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
}

function show_left_bar() {
  option.classList.toggle("selected");
}

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 760) {
    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
  }

  if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
    title_sidebar.classList.add("disabled");
  }
});
