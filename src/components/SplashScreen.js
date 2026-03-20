import React, { useState, useEffect } from 'react'
import Styled, { keyframes } from 'styled-components'

function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    const removeTimer = setTimeout(() => onComplete(), 2500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  return (
    <SplashWrap $fadeOut={fadeOut}>
      <LogoContainer>
        <SplashLogo src="/images/logo.svg" alt="TELSA" />
        <LoadingBar>
          <LoadingProgress />
        </LoadingBar>
      </LogoContainer>
    </SplashWrap>
  )
}

export default SplashScreen

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`

const loadProgress = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`

const SplashWrap = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
  opacity: ${props => props.$fadeOut ? 0 : 1};
  pointer-events: ${props => props.$fadeOut ? 'none' : 'all'};
`

const LogoContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  animation: ${fadeIn} 0.6s ease-out;
`

const SplashLogo = Styled.img`
  width: 200px;
  filter: invert(1);
  animation: ${pulse} 2s ease-in-out infinite;
`

const LoadingBar = Styled.div`
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  overflow: hidden;
`

const LoadingProgress = Styled.div`
  height: 100%;
  background: linear-gradient(90deg, #e82127, #ff4f54);
  border-radius: 4px;
  animation: ${loadProgress} 2s ease-out forwards;
`
