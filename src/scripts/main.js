document.addEventListener('DOMContentLoaded', function(){ //evento de ira funcionar quando carregar o documento

    //funçao para o header aparecer asasim que passar do hero
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;     //aqui ele ira ver a altura do hero para saber quando a rolagem passou

    window.addEventListener('scroll', function() {   //evento de scroll
        const posiçãoAtual = window.scrollY;      //aqui mostra o eixo do scroll que é Y (verticaL)

        //aqui vai fazer tudo funcionar
        if (posiçãoAtual > alturaHero) {
            ocutaElementosDoHeader();
        }                                   //Muito auto-explicativo e extremamente foda         
        else {
            exibeElementosDoHeader();
        }
    })
})

// função de adicionar a classe ao header (vai esconder tudo)   (muito foda)
    function ocutaElementosDoHeader() {
        const header = document.querySelector('header')
        header.classList.add('header--is-hidden')
    }
    
    //função de remover a classe ao header (muito foda tambem)
    function exibeElementosDoHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
    }