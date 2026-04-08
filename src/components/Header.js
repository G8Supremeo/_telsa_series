/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars, selectDarkMode, toggleDarkMode } from '../features/car/carSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Convert car name to section/route slug
  const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

  // Handle car nav click: smooth scroll on home, navigate on other pages
  const handleCarClick = (carName, e) => {
    e.preventDefault();
    const slug = toSlug(carName);

    // Only car models (not Solar) have sections/pages
    const carModels = ['Model S', 'Model 3', 'Model X', 'Model Y'];
    const isCarModel = carModels.includes(carName);

    if (location.pathname === '/') {
      // On home page, scroll to section
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isCarModel) {
      // On other pages, navigate to car detail
      navigate(`/model/${slug}`);
    } else {
      // Non-car items, go home first
      navigate('/');
    }

    setBurgerStatus(false);
  };

  return (
    <>
      <Container $darkMode={darkMode}>
        <LogoLink to="/">
          <Logo src='/images/logo.svg' $darkMode={darkMode} />
        </LogoLink>
        <Menu>
          {cars && cars.map((car, index) => (
            <NavLink key={index} href="#" onClick={(e) => handleCarClick(car, e)} $darkMode={darkMode}>
              {car}
            </NavLink>
          ))}
        </Menu>
        <RightMenu>
          <NavLink as={Link} to="/experience" $darkMode={darkMode}>Experience</NavLink>
          <NavLink as={Link} to="/configurator" $darkMode={darkMode}>Configure</NavLink>
          <ThemeToggle onClick={() => dispatch(toggleDarkMode())} $darkMode={darkMode}>
            {darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </ThemeToggle>
          <CustomMenu onClick={() => setBurgerStatus(true)} $darkMode={darkMode} />
        </RightMenu>
      </Container>

      {burgerStatus && <Overlay onClick={() => setBurgerStatus(false)} />}
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><a href="#" onClick={(e) => handleCarClick(car, e)}>{car}</a></li>
        ))}
        <li><Link to="/experience" onClick={() => setBurgerStatus(false)}>Experience</Link></li>
        <li><Link to="/configurator" onClick={() => setBurgerStatus(false)}>Configure</Link></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Power & Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">More</a></li>
      </BurgerNav>
    </>
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
    background: ${props => props.$darkMode ? 'rgba(0,0,0,0.9)' : 'transparent'};
    backdrop-filter: ${props => props.$darkMode ? 'blur(10px)' : 'none'};
    transition: background 0.3s ease, backdrop-filter 0.3s ease;
`

const LogoLink = Styled(Link)`
    display: flex;
    align-items: center;
`

const Logo = Styled.img`
    width: 100px;
    filter: ${props => props.$darkMode ? 'invert(1)' : 'none'};
    transition: filter 0.3s ease;
`

const Menu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media(max-width: 768px) {
        display: none;
    }
`

const NavLink = Styled.a`
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap: nowrap;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: ${props => props.$darkMode ? '#fff' : '#393c41'} !important;
    transition: color 0.3s ease, opacity 0.2s ease;
    text-decoration: none !important;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

const RightMenu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const ThemeToggle = Styled.button`
    background: ${props => props.$darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${props => props.$darkMode ? '#fff' : '#393c41'};

    svg {
        fill: ${props => props.$darkMode ? '#fff' : '#393c41'};
    }

    &:hover {
        background: ${props => props.$darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)'};
        transform: rotate(30deg);
    }
`

const CustomMenu = Styled(MenuIcon)`
    cursor: pointer;
    color: ${props => props.$darkMode ? '#fff' : '#393c41'} !important;
    fill: ${props => props.$darkMode ? '#fff' : '#393c41'} !important;
    transition: color 0.3s ease, fill 0.3s ease;
`

const BurgerNav = Styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
            color: #393c41 !important;
            text-decoration: none !important;
        }
    }
`

const Overlay = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    backdrop-filter: blur(4px);
    cursor: pointer;
`

const CloseWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = Styled(CloseIcon)`
    cursor: pointer;
`

export default Header
