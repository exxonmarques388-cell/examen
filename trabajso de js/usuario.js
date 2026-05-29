class Usuario {
    #nombre;
    #password;

    constructor(nombre, password) {
        this.#nombre = nombre;
        this.#password = password;
    }

    // Métodos privados de validación
    #validarPassword(contrasenia) {
        return contrasenia.length >= 4;
    }

    #validarUsuario(user) {
        return user.length >= 4;
    }

    // Método login
    login(pass, user) {
        if (this.#validarPassword(pass) && this.#validarUsuario(user)) {
            console.log(`Bienvenido ${this.#nombre}`);
        } else {
            console.log("No cumple con el long de usuario o password");
        }
    }

    // Mostrar datos del usuario
    datosUser() {
        console.log(`El nombre del usuario es ${this.#nombre}`);
    }
}

// Crear instancia
const usuario1 = new Usuario("exxon", "345");

// Probar login
usuario1.login("abcd", "pablo");  
usuario1.datosUser();            