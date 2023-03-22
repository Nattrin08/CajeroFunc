
alert("Bienvenido a su BancoAmigo");
let opc = parseInt(prompt('Ingrese Opc-1: Sacar dinero // Opc-2: Cambio contraseña'));
let pin = 1234;
const Saldo = 20000000;
const usuario = "natt";

switch (opc) {
    case 1:
        var Iusuario = prompt("Ingrese ususario:");
        var Ipin = prompt("Ingrese pin:");
        UsuContr();
        break;
    case 2:
        CamContr();

        break;
    default:
        alert("La opción no es valida");
}
function UsuContr() {
    if (usuario == Iusuario && pin == Ipin) {
        alert("tu saldo es:" + " " + Saldo)
    } else {
        alert("Usuario/Pin incorrecto")
    }
}
function CamContr() {
    const PinActual = parseInt(prompt("Ingrese su contraseña actual"));
    const PinNuevo = parseInt(prompt("Ingrese su contraseña nueva"));

    if (PinActual === pin) {
        pin = PinNuevo;
        alert("Pin actualizado")
    } else {
        alert("Pin actual incorrecto")
    }
}    
let opc2 = parseInt(prompt('Ingrese Opc-1: Sacar dinero // Opc-2: Cambio contraseña'));
switch (opc2) {
    case 1:
        var Iusuario = prompt("Ingrese ususario:");
        var Ipin = prompt("Ingrese pin:");
        UsuContr();
        break;
    case 2:
        CamContr();

        break;
    default:
        alert("no es valida");
}