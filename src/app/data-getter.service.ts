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
      default:
        result = { image: '', text: '' };
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

}
