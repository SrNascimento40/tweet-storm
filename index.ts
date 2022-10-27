function tweetStorm(text: string) {
    var caracteres = text.length
    var pages: Array<string> = [];

    if (caracteres <= 140) {
        console.log(caracteres);
    } else {
        console.log(caracteres);
        
        while (caracteres > 140) {
            const corte = text.slice(0, 140)
            pages.push(corte)
            caracteres -= 140
        } if  (caracteres != 0) {
            console.log(caracteres);
            const corte = text.slice((text.length - caracteres), text.length)
            pages.push(corte)
        }
        console.log(pages);
    }
}

tweetStorm("let' fuckiiiiiiiinng gooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooaba")