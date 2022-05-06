export default function Card({ 
  name,
  status,
  species,
  type,
  gender,
  image 
}) {
  const styleImg = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '150px',
    borderRadius: '20px 20px 0 0',
  }

  const styleContainer = {
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    cursor: 'pointer'
  }

  return (
    <div style={styleContainer} className="transform">
      <div style={styleImg}>
        { status === 'Alive' && 
        <div  
          style={{ 
            width: '100%', 
            height: '100%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            color: 'red',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '20px 20px 0 0',
            fontSize: '20px'
          }}>
          {status}
        </div> }
      </div>
      <div style={{ padding: '10px', fontSize: '12px', gap: '10px' }}>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Nome: </span>
          <span>{`${name}`}</span>
        </div>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Status: </span>
          <span>{`${status}`}</span>
        </div>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Espécie: </span>
          <span>{`${species}`}</span>
        </div>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Tipo: </span>
          <span>{`${type}`}</span>
        </div>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Gênero: </span>
          <span>{`${gender}`}</span>
        </div>
      </div>
    </div>
  )
}
