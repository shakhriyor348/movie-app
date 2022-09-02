import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../../Context/MovieContext'



const NavLink = styled.a`
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    margin-right: 24px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    color: #fff;
    @media (max-width: 860px) {
        font-size: 40px;
    }
    &.active {
        color: #f9a5ff;
    }
`

const HeroNavLink = ({ text }) => {

    const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContext)
    return (
        <NavLink onClick={() => {
            setActiveLink(text)
            setHiddenMenu(true)
        }}
        className={activeLink === text ? 'active' : ''}
        >{text}</NavLink>
    )
}

export default HeroNavLink