/********Definimos variables globales*******/
var menu = document.querySelector('.menu-toggle');
/******** Evento que se ejecuta cuando la pagina ya alla cargado*******/
window.addEventListener("load", function () {

	if (menu) {
		menu.addEventListener('click', function(){
			mostar_menu();
		});
	}

}); // Cierre del evento load

/************ Mis funciones *************/


function mostar_menu(){
	menu.classList.toggle('change');
	document.getElementsByTagName('nav')[0].classList.toggle("activo");
}