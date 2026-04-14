import { coresTipo } from './tipos.js'

function paginaInicial () {
    const btnPesquisar = document.querySelector("#btn-pesquisar")
    const resposta = document.querySelector(".resposta")
    const imgPokemon = document.querySelector("#imgPokemon")
    const inputPokemon = document.querySelector("#pesquisar-pokemon")
    const hidden = document.querySelector('.hidden')
    const tipoPokemon = document.querySelector('#tipoPokemon')

    async function pokeApi () {
        const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value.toLowerCase()}/`)
        const dados = await respostaApi.json()

        tipoPokemon.innerText = ""
        dados.types.forEach(tipo => {
            const nomeTipo = tipo.type.name
            const corTipo = coresTipo[nomeTipo] || 'bg-gray-400'

            const span = document.createElement('span')
            span.className = `flex items-center rounded-lg mr-2 inline-flex overflow-hidden`

            const iconContainer = document.createElement('div')
            iconContainer.className = `${corTipo} p-2 flex items-center justify-center`


            const img = document.createElement('img')
            img.src = `./assets/icons/${nomeTipo}.svg`
            img.className = "w-6 h-6 filter brightness-0 invert"
            img.alt = `Ícone do tipo ${nomeTipo}`

            iconContainer.appendChild(img)

            const texto = document.createElement('span')
            texto.innerText = nomeTipo.charAt(0).toUpperCase() + nomeTipo.slice(1)
            texto.className = `bg-background-type text-white font-bold px-4 py-2`
            
            span.appendChild(iconContainer)
            span.appendChild(texto)
            tipoPokemon.appendChild(span)
        } )


        hidden.classList.remove('hidden')
        resposta.textContent = dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
        inputPokemon.value = ""
        imgPokemon.src = dados.sprites.front_default
    }
   
    btnPesquisar.addEventListener('click', pokeApi)
}

paginaInicial()