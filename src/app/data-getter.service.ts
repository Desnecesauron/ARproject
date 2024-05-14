import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  processValue(value: string): { image: string, text: string }{
    let result: { image: string, text: string };
    switch (value) {
      case 'bulbasaur':
        result = { image: this.json1.image, text: this.json1.text };
        break;
      case 'charmander':
        result = { image: this.json2.image, text: this.json2.text };
        break;
      case 'chave':
        result = { image: this.json3.image, text: this.json3.text };
        break;
      case 'squirtle':
        result = { image: this.json4.image, text: this.json4.text };
        break;
      case 'cpu':
        result = { image: this.json5.image, text: this.json5.text };
        break;
      case 'ssd':
        result = { image: this.json6.image, text: this.json6.text };
        break;
      case 'placa-de-som':
        result = { image: this.json7.image, text: this.json7.text };
        break;
      case 'memoria-ram':
        result = { image: this.json8.image, text: this.json8.text };
        break;
      case 'placa-mae':
        result = { image: this.json9.image, text: this.json9.text };
        break;
      case 'placa-de-video':
        result = { image: this.json10.image, text: this.json10.text };
        break;
      default:
        result = { image: '', text: value };
        break;
    }
    return result;
  }

  // https://www.qr-code-generator.com/


  json1 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/bulbasaur.png",
    "text": "Bulbasaur é um Pokémon do tipo grama/venenoso. Ele é o Pokémon número 001 na Pokédex Nacional. Ele é um dos Pokémon iniciais da região de Kanto, junto com Charmander e Squirtle. Bulbasaur é um Pokémon quadrúpede, com uma aparência que lembra um sapo ou um dinossauro. Ele possui uma semente de planta nas costas, que cresce e se desenvolve junto com ele. Bulbasaur é um Pokémon muito amigável e leal, e costuma ser escolhido por treinadores iniciantes por ser um Pokémon fácil de treinar. Bulbasaur evolui para Ivysaur no nível 16, e depois para Venusaur no nível 32."
  }

  json2 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/charmander.png",
    "text": "Charmander é um Pokémon do tipo fogo. Ele é um dos Pokémon iniciais da primeira geração. Charmander é um Pokémon muito amigável e leal, mas também é muito teimoso. Ele é um Pokémon muito forte e pode evoluir para Charmeleon e depois para Charizard. Charmander é um Pokémon muito popular e é um dos Pokémon mais conhecidos de todos os tempos."
  }

  json3 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/chave.png",
    "text": "A chave é um objeto que abre portas. Você pode pegar a chave e usá-la para abrir a porta."
  }

  json4 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/squirtle.png",
    "text": "Squirtle é um Pokémon do tipo água. Ele é um dos Pokémon iniciais da primeira geração. Squirtle é um Pokémon muito amigável e leal, mas também é muito teimoso. Ele é um Pokémon muito forte e pode evoluir para Wartortle e depois para Blastoise. Squirtle é um Pokémon muito popular e é um dos Pokémon mais conhecidos de todos os tempos."
  }

//cpu.png
  json5 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/cpu.png",
    "text": "O processador é a parte mais importante de um computador. Ele é responsável por executar as instruções e processar os dados. O processador é o cérebro do computador e é responsável por executar todas as tarefas. Existem vários tipos de processadores, como Intel, AMD, entre outros. O processador é uma das partes mais caras de um computador, mas é essencial para o bom funcionamento do computador."
  }

// ssd.png
  json6 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/ssd.png",
    "text": "O SSD é um tipo de armazenamento de dados que é mais rápido e mais confiável do que o HD tradicional. O SSD é uma ótima opção para quem quer um computador mais rápido e mais eficiente. O SSD é mais caro do que o HD tradicional, mas vale a pena o investimento. O SSD é uma das melhores maneiras de melhorar o desempenho do seu computador."
  }
// placa-de-som.png
  json7 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/placa-de-som.png",
    "text": "A placa de som é um dispositivo de hardware que permite ao computador reproduzir e gravar áudio. A placa de som é responsável por converter os sinais de áudio digitais em sinais de áudio analógicos que podem ser reproduzidos por alto-falantes ou fones de ouvido. A placa de som é essencial para quem quer ouvir música, assistir filmes ou jogar jogos no computador."
  }
// memoria-ram.png
  json8 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/memoria-ram.png",
    "text": "A memória RAM é um tipo de memória de acesso aleatório que é usada para armazenar dados temporariamente. A memória RAM é essencial para o bom funcionamento do computador, pois é responsável por armazenar os dados que estão sendo usados no momento. A memória RAM é mais rápida do que o HD tradicional e é essencial para quem quer um computador rápido e eficiente."
  }
// placa-mae.png
  json9 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/placa-mae.png",
    "text": "A placa-mãe é a principal placa de circuito de um computador. Ela é responsável por conectar todos os componentes do computador, como o processador, a memória RAM, a placa de vídeo, entre outros. A placa-mãe é essencial para o bom funcionamento do computador e é uma das partes mais importantes do computador."
  }
// placa-de-video.png
  json10 = {
    "image": "https://raw.githubusercontent.com/Desnecesauron/ARproject/gh-pages/assets/placa-de-video.png",
    "text": "A placa de vídeo é um dispositivo de hardware que é responsável por processar e exibir imagens no computador. A placa de vídeo é essencial para quem quer jogar jogos ou assistir vídeos no computador. Existem vários tipos de placas de vídeo, como Nvidia, AMD, entre outros. A placa de vídeo é uma das partes mais importantes do computador e é essencial para o bom funcionamento do computador."
  }

}
