export function tweetStorm(text: string) {
    //espaçamentos antes e depois devem ser ignorados
    text = text.trim()
    //mede quantidade de caracteres
    var caracteresQuantidade = text.length
    //vai armazenar cada página de tweet
    var pages: Array<string> = [];
    //pages com paginação
    var pagesPaginacao: Array<string> = [];

    if (caracteresQuantidade === 0) {
        //Se não houver texto, não haverá nada para tratar
        console.log("Nenhum texto para tratar.");
        return "Nenhum texto para tratar."

    } else if (caracteresQuantidade <= 139) {
        //Se o texto tiver menos ou exatamente 140 caracteres, ele já pode ser postado em uma única página
        pages.push((text).trim())
        console.log("seu texto pode ser publicado em 1 tweet:\n\n" + pages[0]);
        return pages[0]

    } else {
        //caso o texto tenha mais que 140 caracteres
        for (let index = 0; caracteresQuantidade > 139; index++) {
            //se o primeiro caractere depois dos 140 for ' ', a página deve encerrar no 140º caractere
            if (text.lastIndexOf(' ') == 140) {
                //faz o recorte do que será postado
                const recorte = text.slice(0, 139)
                //adiciona ao grupo de tweetStorm
                pages.push(recorte)
                //tira do texto total o que já foi tratado
                text = (text.slice(140, text.length)).trim()
                //atualiza quantidade de caracteres com o restante do que sobrou do texto
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
                //atualiza quantidade de caracteres com o restante do que sobrou do texto
                caracteresQuantidade = text.length
            }
            //se faltar algo, será adicionado a última página
        } if (caracteresQuantidade != 0) {
            pages.push(text)
        }
        console.log("O texto acima não cabe em um tweet, ele precisa ser quebrado em " + pages.length + " páginas para postar:\n");
        for (let i = 0; i < pages.length; i++) {
            pagesPaginacao.push(pages[i] + ' ' + (i+1) + '/' + pages.length);
            console.log(pages[i] + ' ' + (i+1) + '/' + pages.length + '\n');
        }
        return pagesPaginacao
    }
}

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et lorem eros. Phasellus arcu justo, scelerisque eu maximus eu, rhoncus in lorem. Donec lacus leo, consectetur semper ullamcorper efficitur.";
    console.log(tweetStorm(texto));