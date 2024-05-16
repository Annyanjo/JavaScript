let quartosDisponiveis = 5;
let reservaConfimada = true;

let statusReserva = (reservaConfimada && quartosDisponiveis > 0) ? "Reserva confirmada"
                  : (quartosDisponiveis > 0) ? "Aguardado confirmação"
                  : "Sem quartos disponíveis";

console.log(statusReserva); // Saída: "Reserva confirmada"