import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../../styles/TextStyles"
import themes from "../../styles/ColorStyles"

function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <img src="/images/logos/logo.svg" alt="logo" />
            <Title>Design <br />
              and code React apps</Title>
            <Description>
              Don’t skip design. Learn design and code, by building real apps with
              React and Swift. Complete courses about the best tools.
            </Description>
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
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`color: ${themes.dark.text1}`

const Description = styled(MediumText)``

export default HeroSection
