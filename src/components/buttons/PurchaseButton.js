import React from "react"
import styled from "styled-components"

export default function PurchaseButton(props) {
  return (
    <Wrapper>
      <Title>{props.title || "default props title" }</Title>
      <Subtitle>{props.subtitle || "default props subtitle"}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.p``

const Subtitle = styled.p``
