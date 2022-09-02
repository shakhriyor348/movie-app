import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../../../Context/MovieContext'
import Container from '../../Container'
import HeroNavMenu from '../HeroNavMenu'
import HeroNavSearch from '../HeroNavSearch'




const Nav = styled.nav`
    padding: 40px 0;
    background: #212229;
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
const ParentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    #burgerMenu {
        color: #f9a5ff;
        cursor: pointer;
        display: none;
    }
    @media (max-width: 860px) {
        #burgerMenu {
            display: block;
        }
    }
`


const HeroNav = () => {
    const { hiddenMenu, setHiddenMenu } = useContext(MovieContext)

    return (
        <Nav>
            <Container>
                <ParentWrapper>
                    <Wrapper>
                        <Logo href="">Movie App</Logo>
                        <HeroNavMenu />
                    </Wrapper>
                    <HeroNavSearch />
                    <i
                        onClick={() => setHiddenMenu(!hiddenMenu)}
                        id='burgerMenu'
                        className={hiddenMenu ? 'fas fa-bars' : 'fas fa-times'}
                    ></i>
                </ParentWrapper>
            </Container>
        </Nav>
    )
}

export default HeroNav