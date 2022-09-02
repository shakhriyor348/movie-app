import React from 'react'
import styled from 'styled-components'


const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 10px;
    background: #3498db;
    border-radius: 5px;
    animation: spinner 1.8s ease-in-out infinite;

    &::before, &::after {
        content: '';
        position: absolute;
        display: block;
        animation: spinner 1.8s ease-in-out infinite;
        height: 10px;
        border-radius: 5px;
    }
    &::before {
        top: -20px;
        left: 10px;
        width: 40px;
        background: #ef4836;
    }
    &::after {
        bottom: -20px;
        width: 35px;
        background: #f5ab35;
    }

    @keyframes spinner {
        0% {
            transform: translate(40px);
        }
        50% {
            transform: translate(-30px);
        }
        100% {
            transform: translate(40px);
        }
    }
`


const Loader = () => {
    return (
        <LoaderWrapper></LoaderWrapper>
    )
}

export default Loader