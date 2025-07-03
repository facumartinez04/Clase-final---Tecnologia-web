
/* MENU NAVBAR */
const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  menuIcon.style.display = isOpen ? 'none' : 'inline';
  closeIcon.style.display = isOpen ? 'inline' : 'none';
});

const links = menu.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  });
});


/* SECTORES CASCADA */

document.querySelectorAll('.faq-pregunta').forEach(button => {
  button.addEventListener('click', () => {
    const respuesta = button.nextElementSibling;
    respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
  });
});


/* CONTACTO */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const nombre = document.getElementById("name");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("message");

  const campos = [nombre, apellido, email, mensaje];

  campos.forEach(campo => {
    campo.addEventListener("blur", () => {
      clearFieldError(campo);
      validarCampo(campo);
    });
  });

  form.addEventListener("submit", function (e) {
    let valid = true;
    clearErrors();

    campos.forEach(campo => {
      if (!validarCampo(campo)) {
        valid = false;
      }
    });

    if (!valid) {
      e.preventDefault();
    } else {
      e.preventDefault(); 
      alert("Formulario enviado correctamente ✅");
      form.reset();
    }
  });

  function validarCampo(campo) {
    const valor = campo.value.trim();
    const id = campo.id;

    if (valor === "") {
      showError(campo, "Este campo es obligatorio.");
      return false;
    }

    if (id === "email" && !validateEmail(valor)) {
      showError(campo, "El email no es válido.");
      return false;
    }

    return true;
  }

  function showError(input, message) {
    const error = document.createElement("span");
    error.className = "error-msg";
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add("input-error");
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error-msg");
    errors.forEach(error => error.remove());

    const inputs = document.querySelectorAll(".input-error");
    inputs.forEach(input => input.classList.remove("input-error"));
  }

  function clearFieldError(input) {
    const error = input.parentElement.querySelector(".error-msg");
    if (error) error.remove();
    input.classList.remove("input-error");
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});