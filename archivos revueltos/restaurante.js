
class Reserva {
  constructor(nombreCliente, numeroPersonas, fecha, hora) {
    this.nombreCliente = nombreCliente;
    this.numeroPersonas = numeroPersonas;
    this.fecha = fecha;
    this.hora = hora;
  }

  mostrarInfo() {
    return `${this.nombreCliente} reservó para ${this.numeroPersonas} personas el ${this.fecha} a las ${this.hora}`;
  }
}


class ReservaNormal extends Reserva {
  constructor(nombreCliente, numeroPersonas, fecha, hora) {
    super(nombreCliente, numeroPersonas, fecha, hora);
  }
}


class ReservaVIP extends Reserva {
  constructor(nombreCliente, numeroPersonas, fecha, hora, beneficio) {
    super(nombreCliente, numeroPersonas, fecha, hora);
    this.beneficio = beneficio;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} (VIP con beneficio: ${this.beneficio})`;
  }
}


class ReservaEvento extends Reserva {
  constructor(nombreCliente, numeroPersonas, fecha, hora, tipoEvento, serviciosExtra) {
    super(nombreCliente, numeroPersonas, fecha, hora);
    this.tipoEvento = tipoEvento;
    this.serviciosExtra = serviciosExtra;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()} (Evento: ${this.tipoEvento}, Servicios: ${this.serviciosExtra})`;
  }
}


const reservas = [
  new ReservaNormal("Carlos Pérez", 4, "2026-03-12", "20:00"),
  new ReservaVIP("María López", 2, "2026-03-13", "21:00", "Mesa preferencial"),
  new ReservaVIP("Ana Torres", 3, "2026-03-14", "19:30", "Postre de cortesía"),
  new ReservaEvento("Luis Ramírez", 50, "2026-03-20", "18:00", "Boda", "Decoración y música en vivo")
];


reservas.map(reserva => console.log(reserva.mostrarInfo()));