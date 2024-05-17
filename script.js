$(document).ready(function() {
    // mostrar todos los clientes inicialmente
    mostrarClientes(clientes);
  
    // filtrar clientes basados en la entrada de busqueda
    $("#searchInput").on("keyup", function() {
      let textoBusqueda = $("#searchInput").val().toLowerCase();
      let campoBusqueda = $("#searchField").val();
      $(".card").each(function() {
        let valorCliente = $(this).find("." + campoBusqueda).text().toLowerCase();
        if (valorCliente.startsWith(textoBusqueda)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
  // Funcion para mostrar clientes
  function mostrarClientes(clientes) {
    let listaClientes = $("#clientsList");
    listaClientes.empty();
  
    for (let i = 0; i < clientes.length; i++) {
      let cliente = clientes[i];
      let tarjeta = $("<div class='card'>" +
        "<h3 class='nombre'>" + cliente.nombre + "</h3>" +
        "<img src='" + cliente.imagen + "' alt='Imagen de " + cliente.nombre + "' onError=\"this.onerror=null;this.src='imagenes/default.jpg';\">" +
        "<p class='telefono'>Teléfono: " + cliente.telefono + "</p>" +
        "<p class='correo'>Correo: " + cliente.correo + "</p>" +
        "</div>");
      listaClientes.append(tarjeta);
    }
  }
  
  let clientes = [
    {
      nombre: "Nico Acuña",
      telefono: "6641234567",
      correo: "nicopayaso@gmail.com",
      imagen: "imagenes/nico.jpg"
    },
    {
      nombre: "Adriano Rosende",
      telefono: "6649876543",
      correo: "adriano@gmail.com",
      imagen: "imagenes/adriano.jpg"
    },
    {
      nombre: "Noel Santiañez",
      telefono: "6643334444",
      correo: "noel@gmail.com",
      imagen: "imagenes/noel.jpg"
    },
    {
      nombre: "Roberto Carlos",
      telefono: "6195556666",
      correo: "roberto@hotmail.com",
      imagen: "imagenes/roberto.jpg"
    },
    {
      nombre: "Astor Gitano",
      telefono: "664820392",
      correo: "astorgitano@hotmail.com",
      imagen: "imagenes/astor.jpg"
    },
    {
      nombre: "Manolo Lama",
      telefono: "664450396",
      correo: "manololama@hotmail.com",
      imagen: "imagenes/manololama.jpg"
    }
  ];
  