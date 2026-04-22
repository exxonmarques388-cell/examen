class Clientes {
  constructor(nombre, ncliente, ncuenta, saldo, monto) {
    this.nombre = nombre;
    this.ncliente = ncliente;
    this.ncuenta = ncuenta;
    this.saldo = saldo;
    this.monto = monto;
    this.deuda = 0;
    this.movimientos = []; // array para almacenar operaciones
  }

  mostrarinfo() {
    return console.log(`Nombre:${this.nombre}
            Numero de cliente:${this.ncliente}
            Numero de cuenta:${this.ncuenta}`);
  }

  consultaSaldo() {
    return console.log(`Su saldo es de:${this.saldo}`);
  }

  deposito() {
    let nuevoSaldo = this.saldo + this.monto;
    this.movimientos.push({ tipo: "Depósito", monto: this.monto, saldoFinal: nuevoSaldo });
    return console.log(`saldo nuevo: ${nuevoSaldo}`);
  }

  retiro(interes = 0.1) {
    if (this.saldo < this.monto) {
      this.deuda = (this.monto - this.saldo) * (1 + interes);
      this.movimientos.push({ tipo: "Retiro fallido", monto: this.monto, deudaGenerada: this.deuda });
      this.saldo = 0;
      return console.log(`Saldo insuficiente. Se genera deuda con interés: ${this.deuda}`);
    } else {
      this.saldo -= this.monto;
      this.movimientos.push({ tipo: "Retiro exitoso", monto: this.monto, saldoFinal: this.saldo });
      return console.log("Retiro exitoso");
    }
  }

  mostrarMovimientos() {
    console.log("Historial de movimientos:");
    this.movimientos
      .map((operacion, posicion) => 
        `${posicion + 1}. Tipo: ${operacion.tipo}, Monto: ${operacion.monto}, ${
          operacion.saldoFinal ? "Saldo final: " + operacion.saldoFinal : "Deuda generada: " + operacion.deudaGenerada
        }`
      )
      .forEach(linea => console.log(linea));
  }
}

class CuentaAhorro extends Clientes {
  constructor(nombre, ncliente, ncuenta, saldo, monto, rendimiento) {
    super(nombre, ncliente, ncuenta, saldo, monto);
    this.rendimiento = rendimiento;
  }

  balanceRendimiento() {
    return console.log(`saldo generado:${this.saldo * this.rendimiento}`);
  }
}

class CuentaCorriente extends Clientes {
  constructor(nombre, ncliente, ncuenta, saldo, monto) {
    super(nombre, ncliente, ncuenta, saldo, monto);
  }
}

// Ejemplo
let pepitoCA = new CuentaAhorro("pepe", "02", "80", 2450, 2500, 0.05);

pepitoCA.mostrarinfo();
pepitoCA.consultaSaldo();
pepitoCA.deposito();
pepitoCA.balanceRendimiento();
pepitoCA.retiro(0.2); // retiro con interés del 20% si no alcanza

pepitoCA.mostrarMovimientos(); // muestra el historial usando .map()