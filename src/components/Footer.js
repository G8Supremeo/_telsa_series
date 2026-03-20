import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <FooterColumn>
          <ColumnTitle>TELSA</ColumnTitle>
          <FooterLink as={Link} to="/">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Investor Relations</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Vehicles</ColumnTitle>
          <FooterLink as={Link} to="/model/model-s">Model S</FooterLink>
          <FooterLink as={Link} to="/model/model-3">Model 3</FooterLink>
          <FooterLink as={Link} to="/model/model-x">Model X</FooterLink>
          <FooterLink as={Link} to="/model/model-y">Model Y</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Energy</ColumnTitle>
          <FooterLink href="#">Solar Panels</FooterLink>
          <FooterLink href="#">Solar Roof</FooterLink>
          <FooterLink href="#">Powerwall</FooterLink>
          <FooterLink href="#">Megapack</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink href="#">Customer Support</FooterLink>
          <FooterLink href="#">Test Drive</FooterLink>
          <FooterLink href="#">Find Us</FooterLink>
          <FooterLink href="#">Insurance</FooterLink>
        </FooterColumn>
      </FooterContent>
      <BottomBar>
        <Copyright>© {new Date().getFullYear()} TELSA Clone. Built with React & Redux.</Copyright>
        <LegalLinks>
          <FooterLink href="#">Privacy & Legal</FooterLink>
          <FooterLink href="#">Vehicle Recalls</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </LegalLinks>
      </BottomBar>
    </FooterWrap>
  )
}

export default Footer

const FooterWrap = Styled.footer`
  background: #171a20;
  color: #ffffff;
  padding: 60px 40px 30px;
`

const FooterContent = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const FooterColumn = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ColumnTitle = Styled.h4`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
`

const FooterLink = Styled.a`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8) !important;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;

  &:hover {
    color: #ffffff !important;
    transform: translateX(4px);
  }
`

const BottomBar = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

const Copyright = Styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`

const LegalLinks = Styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 12px !important;
    color: rgba(255, 255, 255, 0.4) !important;

    &:hover {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  }
`
