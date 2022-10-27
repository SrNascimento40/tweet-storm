function tweetStorm(text: string) {
    //espaçamentos antes e depois devem ser ignorados
    text = text.trim()
    //mede quantidade de caracteres
    var caracteresQuantidade = text.length
    //vai armazenar cada bloco de tweet
    var pages: Array<string> = [];

    if (caracteresQuantidade === 0) {
        //Se não houver texto, não haverá nada para tratar
        console.log("Nenhum texto para tratar");

    } else if (caracteresQuantidade <= 139) {
        //Se o texto tiver menos ou exatamente 140 caracteres, ele já pode ser postado em um único bloco
        pages.push((text).trim())
        console.log("seu texto pode ser publicado em 1 tweet:\n\n" + pages[0]);

    } else {
        //caso o texto tenha mais que 140 caracteres
        for (let index = 0; caracteresQuantidade > 139; index++) {
            //se o primeiro caractere depois dos 140 for ' ' o bloco deve encerrar no 140º caractere
            if (text.lastIndexOf(' ') == 140) {
                //faz o recorte do que será postado
                const recorte = text.slice(0, 139)
                //adiciona ao grupo dos tweetStorms
                pages.push(recorte)
                //tira do texto total o que já foi tratado
                text = (text.slice(140, text.length)).trim()
                //atualiza caracteres com o restante do que sobrou do texto
                caracteresQuantidade = text.length

            } else {
                //faz o recorte do que será postado
                var recorte = text.slice(0, 139)
                //define onde acaba a última palavra dentro do limite de 140 caracteres
                var posUltimaPalavra = recorte.lastIndexOf(' ')
                //atualiza o recorte para acabar antes da última palavra e não da última letra
                recorte = (text.slice(0, posUltimaPalavra)).trim()
                //adiciona o recorte para a lista
                pages.push(recorte)
                //tira do texto total o que já foi tratado
                text = (text.slice(posUltimaPalavra)).trim()
                //atualiza caracteres com o restante do que sobrou do texto
                caracteresQuantidade = text.length
            }
            //se sobrar algo cai aqui para adicionar a última página
        } if (caracteresQuantidade != 0) {
            pages.push(text)
        }
        console.log("No total haverão " + pages.length + " páginas para postar:\n");
        for (let i = 0; i < pages.length; i++) {
            console.log('parte ' + (i+1) + ':\n' + pages[i] + '\n');
        }
    }
}

//TESTS

//nothing
tweetStorm("")
console.log("\n\n");

//Little test
tweetStorm("Lorem ipsum dolor sit amet...")
console.log("\n\n");

//space before and after
tweetStorm("                                                                                           Lorem ipsum                                                                                                     ")
console.log("\n\n");

// big test
tweetStorm("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum lacinia pulvinar. Integer finibus mollis felis et egestas. Etiam consequat nisi at lorem maximus, quis blandit dui scelerisque. Quisque nec enim est. Nam bibendum ultricies mi, id posuere felis volutpat laoreet. Ut egestas pulvinar risus. Nam egestas nunc vitae lobortis consequat. Etiam egestas ligula at sodales tincidunt. Phasellus tortor nibh, euismod et suscipit ut, sodales eget lectus. Proin dignissim interdum ex, sed luctus eros ullamcorper ut. Sed tincidunt risus quis lectus finibus, ut suscipit risus feugiat. Mauris commodo, libero in porta aliquet, eros tellus pulvinar magna, sed blandit arcu ex vitae eros. Ut maximus a mauris id semper.\nNulla tincidunt justo at congue aliquam. Etiam condimentum, ligula venenatis suscipit tincidunt, massa ante venenatis lacus, sit amet eleifend sapien dui porta justo. Duis egestas elementum turpis eget vulputate. Duis placerat vestibulum purus, eget elementum ligula sollicitudin sit amet. Suspendisse varius orci sit amet enim cursus, eu cursus sapien consequat. Maecenas congue velit sem, maximus porttitor nibh placerat in. Duis eget diam nisi.")
console.log("\n\n");