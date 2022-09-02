import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../../Context/MovieContext'
import HeroNavLink from '../HeroNavLink'

const NavMenu = styled.div`
    padding-left: 80px;
    @media (max-width: 860px) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        min-height: 100vh;
        background: rgba(0,0,0,0.8);
        padding-left: 0;
        padding: 20px 50px;
        width: 100%;
        max-width: 340px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: all 800ms ease-in-out;

        &.hidden {
            left:-600px;
            opacity: 0;
        }
    }
`

const HeroNavMenu = () => {
    const { hiddenMenu } = useContext(MovieContext)

    return (
        <NavMenu className={hiddenMenu ? 'hidden' : ''}>
            <HeroNavLink text={'Popular'} />
            <HeroNavLink text={'All Movies'} />
        </NavMenu>

    )
}

export default HeroNavMenu