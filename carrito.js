var btnComprar = document.getElementById("btn-comprar");

btnComprar.addEventListener("click", function() {
  // Crear un mensaje con el listado de la compra
  var mensaje = "Hola, me gustaría comprar los siguientes productos:%0A";
  for (var nombre in productosEnCarrito) {
    mensaje += `- ${nombre} x ${productosEnCarrito[nombre].cantidad}%0A`;
  }
  mensaje += `%0ATotal de la compra: Q${totalCompra.toFixed(2)}`;

  // Crear una URL con el mensaje de WhatsApp
  var url = `https://wa.me/50237207284?text=${encodeURIComponent(mensaje)}`;

  // Abrir la URL en una nueva pestaña
  window.open(url);
});