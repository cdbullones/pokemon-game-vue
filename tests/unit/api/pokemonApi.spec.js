import pokemonApi from '@/api/pokemonApi'

describe('Pokemon Api', () => {

    test('axios debe estar configurado con el api de pokemon', () => {
        
        //console.log(pokemonApi)
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })
    


})