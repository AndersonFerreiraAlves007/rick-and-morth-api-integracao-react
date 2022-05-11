import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import withLayout from './components/Layout'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`

const ContainerLoading = styled.div`
  height: 100%; 
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ListCards = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 20px;
`

const ContainerCard = styled.div`
  width: 20%;
  padding: 20px;
`

const Label = styled.label`
  margin-right: 10px;
  color: crimson;
  font-size: 20px;
  font-weight: bold;
`

const Content = () => {
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
          
          <Container>
            <Label for="episodio">Escolha um episódio:</Label>
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
          </Container>
          <ListCards>
            { 
              personagens.map(item => (
                <ContainerCard>
                  <Card
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    type={item.type}
                    gender={item.gender}
                    image={item.image}
                  />
                </ContainerCard>
              )) 
            }
          </ListCards>
        </div> 
        :
        <ContainerLoading>
          <div style={{ flex: 1,  fontSize: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Buscando os dados...
          </div>
        </ContainerLoading>
      }
    </>
  );
}

const Layout = withLayout(Content)

function App() {
  return < Layout/>
}

export default App;
