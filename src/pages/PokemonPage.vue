<template>
    <img
      src="../assets/pokemon-logo.png" 
      class="fade-in"
      alt="pokemon" >

    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quien es este Pokemon?</h1>

        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
        />

        <PokemonOptions 
            v-show="showOptions"
            :pokemons="pokemonArr" 
            @selection-pokemon="checkAnwser" 
        />

        <templeate v-if="showAnswer">
            <h1 class="fade-in">{{ message }}</h1>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </templeate>
        
    </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data () {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            showOptions: true,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            //console.log(this.pokemonArr)

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnwser(selectionId) {
            this.showPokemon = true
            this.showAnswer = true
            this.showOptions = false
            
            if( selectionId === this.pokemon.id ){
                this.message = `Correcto el pokemon es ${this.pokemon.name}`
            }else{
                this.message = `Oops, el pokemon es ${this.pokemon.name}`
            } 
        },
        newGame() {
            this.pokemonArr = [],
            this.pokemon = null
            this.message = ''
            this.showPokemon = false
            this.showAnswer = false
            this.showOptions = true
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>

<style>

</style>