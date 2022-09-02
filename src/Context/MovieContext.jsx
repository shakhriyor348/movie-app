import { React, createContext, useState, useEffect } from 'react'

export const MovieContext = createContext()

const MovieState = ({ children }) => {
    const API_KEY = '9976e0dfa6f1817cd89602c8ff3fd6d7'

    const [isLoading, setIsLoading] = useState(false)
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const [activeLink, setActiveLink] = useState('Popular')
    const [popularMovies, setPopularMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [showPagination, setShowPagination] = useState(true)

    // console.log(movies.poster_path);

    const getPopularMovies = async () => {
        const popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const popularData = await popular.json()
        setPopularMovies(popularData)
    }

    const getSearchMovies = async () => {
        const search = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
        const searchData = await search.json()
        
        if (searchMovies.trim() === "") {
            setMovies(searchData)
        }
    }

    const newPage = async (direction) => {
        if (direction === 'next') {
            setCurrentPage(currentPage + 1)
            setIsLoading(true)
        } else if (direction === 'previous' && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            setIsLoading(true)
        }

    }

useEffect(() => {
    getPopularMovies()
}, [])

useEffect(() => {
    if (searchMovies.trim() === "") {
        setShowPagination(true)
    }
    getSearchMovies()
    // eslint-disable-next-line
}, [currentPage, searchMovies])

useEffect(() => {
    const loadingTimeout = setTimeout(() => {
        setIsLoading(false)
    }, 1300)
    return () => clearTimeout(loadingTimeout)
}, [movies, currentPage])

const handleSearch = async (e) => {
    e.preventDefault()
    if (searchMovies.trim() === "") return
    const search = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&query=${searchMovies}`)
    const searchData = await search.json()
    setMovies(searchData)
    setShowPagination(false)

}

return (
    <MovieContext.Provider value={{
        hiddenMenu, setHiddenMenu, activeLink, setActiveLink, popularMovies, searchMovies,
        setSearchMovies, currentPage, setCurrentPage, movies, setMovies, getPopularMovies, getSearchMovies, handleSearch, isLoading, setIsLoading, showPagination, setShowPagination, newPage
    }}>
        {children}
    </MovieContext.Provider>
)
}

export default MovieState