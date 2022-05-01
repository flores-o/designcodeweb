import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/menuData"

export default function Header() {
    return (
        <>
            <Wrapper>
                <img src="/images/logos/logo.svg" />
                <MenuWrapper>
                    {menuData.map((item, index) => (
                        <MenuItem>
                            <Link to={item.link} key={index}>
                                <img src={item.icon} alt={item.title} />
                                {item.title} </Link>
                        </MenuItem>
                    ))}
                </MenuWrapper>
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
  grid-template-columns: repeat(5, auto);
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
   }
   `
