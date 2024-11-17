
  function saldodePartidas(vitoria, derrota){
    saldo = vitoria - derrota
    return saldo
  }

  function niveldoJogador(partidas){
    let nivel = ""

    switch(true){
        case (partidas <= 0):
            nivel = "Perdedor"
            break;

        case (partidas < 10):
            nivel = "Ferro"
            break;
    
        case (partidas >= 11 && partidas < 20):
            nivel = "Bronze"
            break;
        
        case (partidas >= 21 && partidas < 50):
            nivel = "Prata"
            break;
    
        case (partidas >= 51 && partidas < 80):
            nivel = "Ouro"
            break;
        
        case (partidas >= 81 && partidas < 90):
            nivel = "Diamante"
            break;
            
        case (partidas >= 91 && partidas < 100):
            nivel = "Lendário"
            break;
    
        case (partidas > 101):
            nivel = "Imortal"
            break;

        default:
            nivel = "Indefinido"
        }
    
    return nivel  
  }

  let heroi = "Lancelot"
  let partidas = saldodePartidas()
  let nivel = niveldoJogador(partidas)

  console.log("O Herói " + heroi + " tem o saldo de " + partidas + " vitórias " + "e está no nível " + nivel)
    
