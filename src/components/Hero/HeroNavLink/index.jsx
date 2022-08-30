import React from 'react'
import styled from 'styled-components'



const NavLink = styled.a`
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    margin-right: 24px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    @media (max-width: 860px) {
        font-size: 40px;
    }
`

const HeroNavLink = ({ text }) => {
    return (
        <NavLink>{text}</NavLink>
    )
}

export default HeroNavLink