const EventEmitter = require("events");

class Process extends EventEmitter {
  pago(cb) {
    console.log("antes del proceso");
    this.emit("verification");
    cb();
    this.emit("completado");
    console.log("despues del proceso");
  }
}

const proceso = new Process();

proceso.on("verificacion"),
  () => {
    console.log("se ha verificado el pago");
  };
proceso.on("completado"),
  () => {
    console.log("se ha completado el pago");
  };


proceso.pago(() => {
    console.log("pagando");
})
