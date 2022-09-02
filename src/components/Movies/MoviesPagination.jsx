import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../Context/MovieContext'
import Container from '../Container'



const MoviePagination = styled.div`

`
const Button = styled.button`
    border: none;
    outline: none;
    background: #32de57;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border-radius: 4px;
    width: 160px;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
    margin: 0 10px;
    transition: background 500ms ease-in-out;
    &:hover {
        background: #259a3e;
    }
   &.notAllowed {
    cursor: not-allowed;
    background: #303847;
   }
`

const MoviePaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
`
const MoviesPagination = () => {
    const { newPage, currentPage, showPagination } = useContext(MovieContext)



    return (
        <MoviePagination>
            {showPagination && (
                <Container>
                    <MoviePaginationWrapper>
                        <Button className={currentPage === 1 ? 'notAllowed' : ''} onClick={() => newPage('previous')}>Prev Page</Button>
                        <Button onClick={() => newPage('next')}>Next Page</Button>
                    </MoviePaginationWrapper>
                </Container>
            )}
        </MoviePagination>
    )
}

export default MoviesPagination