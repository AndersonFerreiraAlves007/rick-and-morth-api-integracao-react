import React, { useState, useEffect } from 'react'
import Card from './components/Card'

function App() {

  const [episodios, setEpisodios] = useState([])
  const [episodioSelecionado, setEpisodioSelecionado] = useState(null)
  const [personagens, setPersonagens] = useState([])
  const [loading, setLoading] = useState(false)

  async function getListEpisodios () {
    try {
      setLoading(true)
      const response = await fetch('https://rickandmortyapi.com/api/episode')
      const data = await response.json()
      setEpisodios(data.results)
      setEpisodioSelecionado(data.results[0])
      setLoading(false)
    } catch(e) {
      setLoading(false)
      console.log('Ocorreu um erro na requisição dos episódios')
    }
  }

  async function getDataPersonagens () {
    try{
      setLoading(true)
      if(episodioSelecionado) {
        const personagens = []
        for(let i = 0; i < episodioSelecionado.characters.length; i++) {
          const response = await fetch(episodioSelecionado.characters[i])
          const data = await response.json()
          personagens.push({
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            image: data.image
          })
        }
        setPersonagens(personagens)
      }
      setLoading(false)
    } catch(e) {
      setLoading(false)
      console.log('Ocorreu um erro na requisição dos personagens')
    }
  }

  useEffect(() => {
    getListEpisodios()
  }, [])

  useEffect(() => {
    getDataPersonagens()
  }, [episodioSelecionado])

  console.log(personagens)

  function searchEpisodio(value) {
    const id = parseInt(value, 10)
    for(let i = 0; i < episodios.length; i++) {
      if(episodios[i].id === id) {
        setEpisodioSelecionado(episodios[i])
        return
      }
    }
  }

  return (
    <>
      { 
        !loading 
        ? 
        <div >
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>INTEGRAÇÃO COM A API DO RICK AND MORTY</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
            <label for="episodio" style={{ marginRight: '10px', color: 'crimson', fontSize: '20px', fontWeight: 'bold' }}>Escolha um episódio:</label>
            { 
              episodioSelecionado && <select 
                name="episodio" 
                id="episodio" 
                value={episodioSelecionado.id}
                onChange={(e) => {
                  searchEpisodio(e.target.value)
                }}
              >
                {
                  episodios.map(item => {
                    return (
                      <option value={item.id}>{`${item.episode} - ${item.name}`}</option>
                    )
                  })
                }
              </select>
            }
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
            { 
              personagens.map(item => (
                <div style={{ width: '20%', padding: '20px' }}>
                  <Card
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    type={item.type}
                    gender={item.gender}
                    image={item.image}
                  />
                </div>
              )) 
            }
          </div>
        </div> 
        :
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>INTEGRAÇÃO COM A API DO RICK AND MORTY</h1>
          <div style={{ flex: 1,  fontSize: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Buscando os dados...
          </div>
        </div>
      }
    </>
  );
}

export default App;
