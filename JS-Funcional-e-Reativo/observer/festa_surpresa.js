const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// observer
function namorada(evento) {
  setTimeout(() => {
    console.log("Namorada: Apagar as Luzes");
    console.log("Namorada: Pedir Sinlêncio");
    console.log("Namorada: Surpresa!!!");
  }, 2000);
}

//observer
function sindico(evento) {
  setTimeout(() => {
    console.log("Sindico: Monitorando barulho");
    console.log(`Sindico: ${evento.resp}`);
    console.log(`Sindico: ${evento.data}`);
  }, 1000);
}

//subjetic
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q) ");
    if (resp.toLowerCase() === "s") {
      // os observadores são notificados
      (interessados || []).forEach((obs) => obs({ resp, data: Date.now() }));
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/*
Chamada da função que registra os dois observadores 
Os observadores são: namorada e sindico
O Subject é o porteiro
*/
porteiro([namorada, sindico]);
