import React, { useState } from 'react'
import Styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';



function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Logo src='/images/logo.svg' />
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Telsa Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Energy</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Power</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">More</a></li>
      </BurgerNav>

    </Container>
  )
}

const Container = Styled.div`
    align-items: center;
    min-height: 60px;
    position: fixed;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const Logo = Styled.img`
    width: 100px;
`

const Menu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = Styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = Styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`
const CloseWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = Styled(CloseIcon)`
    cursor: pointer;
`



export default Header
