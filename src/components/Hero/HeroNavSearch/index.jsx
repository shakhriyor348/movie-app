import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../../Context/MovieContext'


const Form = styled.form`
  height: 40px;
  min-height: 40px;

`

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 50px;
  border: 1px solid #2c2f39;
  background: transparent;
  padding: 10px 16px;
  width: 260px;
  color: #f9a5ff;
  &::placeholder {
    color: #f9a5ff;
    letter-spacing: 1px;
  }
  @media(max-width: 860px) {
    width: 220px;
  }
`


const HeroNavSearch = () => {
  const { searchMovies, setSearchMovies, handleSearch, activeLink } = useContext(MovieContext)

  return (
    <Form onSubmit={handleSearch}>
      {activeLink !== 'Popular' && (
        <Input value={searchMovies} onChange={(e) => setSearchMovies(e.target.value)} type={'text'} placeholder='Search for movies...'></Input>
      )}

    </Form>
  )
}

export default HeroNavSearch