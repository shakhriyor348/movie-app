import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../Context/MovieContext'
import Container from '../Container'



const PopularMovies = styled.div`
    width: 100%;
    
   
`

const PopularMoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    overflow-y: scroll;
    justify-content: space-between;
    
    &::-webkit-scrollbar {
        width: 0;
    }
    img {
        width: 100%;
        max-width: 240px;
        height: 360px;
        margin: 10px 0;
        cursor: pointer;
    }
    @media(max-width: 600px) {
        img {
            max-width: 100%;
            height: 500px;
        }
    }
    @media(min-width: 601px) and (max-width: 854px) {
        img {
            max-width: 50%;
        }
    }
    @media(min-width: 1145px) and (max-width: 1365px) {
        img {
            max-width: 33.33%;
        }
    }
`

const Popular = () => {
    const { popularMovies } = useContext(MovieContext)



    return (
        <PopularMovies>
            <Container>
                <PopularMoviesWrapper>
                    {
                        popularMovies.results && popularMovies.results.map((movie, i) => (
                            <img key={movie.id} src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />
                        ))
                    }
                </PopularMoviesWrapper>
            </Container>
        </PopularMovies>
    )
}

export default Popular