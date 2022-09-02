import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../Context/MovieContext'
import Container from '../Container'
import Movies from '../Movies'
import MoviesPagination from '../Movies/MoviesPagination'
import Popular from '../Popular'

const OutputWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
`


const Output = () => {
  const { activeLink } = useContext(MovieContext)

  return (
    <OutputWrapper>
      {activeLink === 'Popular' &&
        <Container>
          <Popular />
        </Container>
      }
      {
        activeLink === 'All Movies' &&
        <Container>
          <Movies />
          <MoviesPagination />
        </Container>
      }
    </OutputWrapper>
  )
}

export default Output