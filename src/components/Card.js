import React from "react"
import styled from "styled-components"

const CardMedia = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 150px;
  border-radius: 20px 20px 0 0;
`

const CardContainer = styled.div`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`

const CardContent = styled.div`
  padding: 10px;
  font-size: 12px; 
  gap: 10px;
`

const CardContentLine = styled.div`
  margin: 5px 0;
`

const CardContentLineTitle = styled.span`
  font-weight: bold;
`

const CardLayerStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background-color: rgba(0,0,0,0.7);
  border-radius: 20px 20px 0 0;
  font-size: 20px;
`

export default function Card({ 
  name,
  status,
  species,
  type,
  gender,
  image 
}) {
  return (
    <CardContainer className="transform">
      <CardMedia image={image}>
        { status === 'Dead' && 
        <CardLayerStatus>
          {status}
        </CardLayerStatus> }
      </CardMedia>
      <CardContent>
        <CardContentLine>
          <CardContentLineTitle>Nome: </CardContentLineTitle>
          <span>{`${name}`}</span>
        </CardContentLine>
        <CardContentLine>
          <CardContentLineTitle>Status: </CardContentLineTitle>
          <span>{`${status}`}</span>
        </CardContentLine>
        <CardContentLine>
          <CardContentLineTitle>Espécie: </CardContentLineTitle>
          <span>{`${species}`}</span>
        </CardContentLine>
        <CardContentLine >
          <CardContentLineTitle>Tipo: </CardContentLineTitle>
          <span>{`${type}`}</span>
        </CardContentLine>
        <CardContentLine >
          <CardContentLineTitle>Gênero: </CardContentLineTitle>
          <span>{`${gender}`}</span>
        </CardContentLine>
      </CardContent>
    </CardContainer>
  )
}
