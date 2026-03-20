import React from 'react'
import Styled, { keyframes } from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText, accentColor, darkBg, modelSlug }) {
    return (
        <Wrap id={id} bgImage={backgroundImg}>
            <ContentBlock>
                <Fade direction="up" triggerOnce>
                    <TitleRow>
                        <Accent $barColor={accentColor} />
                        <div>
                            <h1><strong>{title}</strong></h1>
                            <p><strong>{description}</strong></p>
                        </div>
                    </TitleRow>
                </Fade>
                <Fade direction="up" delay={150} triggerOnce>
                    <ButtonGroup>
                        {modelSlug ? (
                            <LeftButton as={Link} to={`/model/${modelSlug}`}>
                                {leftBtnText}
                            </LeftButton>
                        ) : (
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                        )}
                        {rightBtnText && (
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        )}
                    </ButtonGroup>
                </Fade>
            </ContentBlock>
            <DownArrow src='/images/down-arrow.svg' darkBg={darkBg} />
        </Wrap>
    )
}

const fadeSlideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Wrap = Styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    scroll-margin-top: 60px;
`

const ContentBlock = Styled.div`
    position: absolute;
    bottom: 50px;
    left: 50px;
    text-align: left;
    color: #171a20;
    animation: ${fadeSlideIn} 0.8s ease-out both;

    h1 {
        margin: 0;
        font-size: 44px;
        font-weight: 600;
        letter-spacing: -1px;
        line-height: 1.1;
        color: #171a20;
    }

    p {
        margin: 6px 0 0 0;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: #393c41;
    }

    @media (max-width: 768px) {
        left: 24px;
        bottom: 80px;
        h1 {
            font-size: 30px;
        }
    }
`

const TitleRow = Styled.div`
    display: flex;
    align-items: stretch;
    gap: 16px;
    margin-bottom: 24px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 20px 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`

const Accent = Styled.div`
    width: 4px;
    border-radius: 2px;
    background: ${props => props.$barColor || '#e82127'};
    flex-shrink: 0;
`

const ButtonGroup = Styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
    }
`

const LeftButton = Styled.div`
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(16, 21, 24, 0.9);
    color: #ffffff !important;
    border: none;
    text-decoration: none !important;

    &:hover {
        background: rgba(16, 21, 24, 1);
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`

const RightButton = Styled(LeftButton)`
    background: rgba(255, 255, 255, 0.7);
    color: #171a20 !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }
`

const DownArrow = Styled.img`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    filter: ${props => props.darkBg ? 'none' : 'invert(1)'};
`

export default Section
