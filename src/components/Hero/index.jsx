import React from 'react'
import styled from 'styled-components'
import HeroNav from './HeroNav'



const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #1b1c22;
`

const Hero = () => {
    return (
        <Section>
            <HeroNav />
        </Section>
    )
}

export default Hero