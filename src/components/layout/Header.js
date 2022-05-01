import React, { useState }  from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(event) {
        console.log("handleClick funtion call")
        console.log(event)
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    return (
        <>
            <Wrapper>
                <Link to="/">
                    <img src="/images/logos/logo.svg" alt="logo"/>
                </Link>
                <MenuWrapper count={menuData.length}>
                    {menuData.map((item, index) => (
                        item.link === "/account" ? (
                            <MenuButton item={item} key={index} onClick={event => handleClick(event)}/>
                          ) : (
                            <MenuButton key={index} item={item} />
                          )
                    ))}
                </MenuWrapper>
                <MenuTooltip isOpen={isOpen}/>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);;
`
