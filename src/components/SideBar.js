import React from 'react'

const SideBar = () => {
  return (
    <aside style={{ backgroundColor: 'green', height: '100%', padding: '10px' }}>
      <h3 style={{ textAlign: 'center', margin: '10px 0 20px', fontSize: '30px' }}>Documentação</h3>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <a href='https://rickandmortyapi.com/documentation/#character-schema' style={{ margin: '10px 0', fontSize: '20px' }}>Personagens</a>
        <a href='https://rickandmortyapi.com/documentation/#location-schema' style={{ margin: '10px 0', fontSize: '20px' }}>Localização</a>
        <a href='https://rickandmortyapi.com/documentation/#episode-schema' style={{ margin: '10px 0', fontSize: '20px' }}>Episódios</a>
      </div>
    </aside>
  )
}

export default SideBar