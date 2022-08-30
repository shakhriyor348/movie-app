import React from 'react'
import styled from 'styled-components'
import Container from '../../Container'
import HeroNavMenu from '../HeroNavMenu'




const Nav = styled.nav`

`

const Logo = styled.a`
    font-size: 22px;
    color: #cd6ad2;
    font-weight: 900;
    user-select: none;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`



const HeroNav = () => {
    return (
        <Nav>
            <Container>
                <Wrapper>
                    <Logo href="">Movie App</Logo>
                    <HeroNavMenu />
                </Wrapper>
            </Container>
        </Nav>
    )
}

export default HeroNav