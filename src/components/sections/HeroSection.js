import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimations"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <>
      <Wrapper>
        <WaveBackground/>
        <ContentWrapper>
          <TextWrapper>
            <Title>Design <br />
              and code React apps</Title>
            <Description>
              Don’t skip design. Learn design and code, by building real apps with
              React and Swift. Complete courses about the best tools.
            </Description>
            <PurchaseButton title="This is props.title" subtitle="This is props.subtitle from the button component" />
          </TextWrapper>
          <MockupAnimation />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}


const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
	max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }

`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  > * {
    opacity: 0;
    animation: ${animation} 1s 0.1s forwards;

    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  `

const Description = styled(MediumText)``

export default HeroSection
