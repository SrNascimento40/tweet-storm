import { tweetStorm } from './index';

describe('programa vai receber um texto qualquer e o transformar em um tweet storm', () => {
  test('Adicionado um pequeno texto para retornar como uma única página', () => {
    const texto1 = "Lorem ipsum dolor sit amet...";
    expect(tweetStorm(texto1)).toBe(texto1);
  });
  test('testando programa sem texto', () => {
    const texto2 = "";
    expect(tweetStorm(texto2)).toBe("Nenhum texto para tratar.");
  });
  test('testando programa com espaço antes e depois do texto', () => {
    const texto3 = "                                                                                           Lorem ipsum                                                                                                     ";
    expect(tweetStorm(texto3)).toBe("Lorem ipsum");
  });
  test('testando programa com texto grande', () => {
    const texto4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et lorem eros. Phasellus arcu justo, scelerisque eu maximus eu, rhoncus in lorem. Donec lacus leo, consectetur semper ullamcorper efficitur.";
    const listaResultado = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et lorem eros. Phasellus arcu justo, scelerisque eu maximus eu, rhoncus in 1/2',
      'lorem. Donec lacus leo, consectetur semper ullamcorper efficitur. 2/2'
    ]
    expect(tweetStorm(texto4)).toEqual(listaResultado);
  });
  test('segundo teste com texto exemplo', () => {
    const texto5 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
    const listaResultado2 = [
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 1/2',
      'making it over 2000 years old. 2/2'
    ]
    expect(tweetStorm(texto5)).toEqual(listaResultado2);
  });
});
