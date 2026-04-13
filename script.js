function paginaInicial () {
    const btnPesquisar = document.querySelector("#btn-pesquisar")
    const resposta = document.querySelector(".resposta")
    const imgPokemon = document.querySelector("#imgPokemon")
    const inputPokemon = document.querySelector("#pesquisar-pokemon")
    const hidden = document.querySelector('.hidden')

    async function pokeApi () {
        const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value.toLowerCase()}/`)
        const dados = await respostaApi.json()


        hidden.classList.remove('hidden')
        resposta.textContent = dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
        inputPokemon.value = ""
        imgPokemon.src = dados.sprites.front_default
    }
   
    btnPesquisar.addEventListener('click', pokeApi)
}

paginaInicial()