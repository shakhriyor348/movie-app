import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
  height: 40px;
  min-height: 40px;

`

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 50px;
  border: 1px solid #2c2f39;
  background: transparent;
  padding: 10px 16px;
  width: 260px;
  color: #f9a5ff;
`


const HeroNavSearch = () => {
  return (
    <Form>
      <Input type={'text'} placeholder='Search for movies...'></Input>
    </Form>
  )
}

export default HeroNavSearch