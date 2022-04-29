import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <img src="/images/logos/logo.svg" alt="logo" />
            <h1>Hi people</h1>
            <p>
              Welcome to your new Gatsby site.
            </p>
          </TextWrapper>
          <Link to="/page-2/"> Go to page 2 </Link> <br />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
background: linear-gradient(180deg,
  #4316DB 0%,
  #9076E7 100%);`

const ContentWrapper = styled.div`
	max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
`
export default HeroSection
