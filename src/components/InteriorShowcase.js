import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';

function InteriorShowcase() {
    return (
        <Container>
            <InteriorHero>
                <HeroBg src="/images/new-interior.jpg" alt="Interior" />
                <HeroText>
                    <Fade direction="up" cascade damping={0.2}>
                        <h2>Cinematic Experience</h2>
                        <p>A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
                    </Fade>
                </HeroText>
            </InteriorHero>

            <FeaturesGrid>
                <FeatureRow>
                    <FeatureImage>
                        <Fade triggerOnce>
                            <img src="/images/connected.jpg" alt="Connectivity" />
                        </Fade>
                    </FeatureImage>
                    <FeatureContent>
                        <Slide direction="right" triggerOnce>
                            <div>
                                <h3>Stay Connected</h3>
                                <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                            </div>
                        </Slide>
                    </FeatureContent>
                </FeatureRow>

                <FeatureRow $reverse>
                    <FeatureImage>
                        <Fade triggerOnce>
                            <img src="/images/audio.jpg" alt="Audio" />
                        </Fade>
                    </FeatureImage>
                    <FeatureContent>
                        <Slide direction="left" triggerOnce>
                            <div>
                                <h3>Immersive Sound</h3>
                                <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                            </div>
                        </Slide>
                    </FeatureContent>
                </FeatureRow>

                <FeatureRow>
                    <FeatureImage>
                        <Fade triggerOnce>
                            <img src="/images/game.jpg" alt="Gaming" />
                        </Fade>
                    </FeatureImage>
                    <FeatureContent>
                        <Slide direction="right" triggerOnce>
                            <div>
                                <h3>Room for Everything</h3>
                                <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                            </div>
                        </Slide>
                    </FeatureContent>
                </FeatureRow>
            </FeaturesGrid>
        </Container>
    );
}

const pulse = keyframes`
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.02); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
`;

const Container = Styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    padding-top: 60px; /* offset for header */
`;

const InteriorHero = Styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroBg = Styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    animation: ${pulse} 10s ease-in-out infinite;
`;

const HeroText = Styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 600px;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    
    h2 {
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: 500;
    }
    
    p {
        font-size: 16px;
        line-height: 1.6;
        color: #d0d1d2;
    }
`;

const FeaturesGrid = Styled.div`
    padding: 80px 5%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 120px;
`;

const FeatureRow = Styled.div`
    display: flex;
    flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
    align-items: center;
    gap: 60px;
    
    @media (max-width: 900px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const FeatureImage = Styled.div`
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    
    img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s ease;
        
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const FeatureContent = Styled.div`
    flex: 1;
    
    h3 {
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 16px;
    }
    
    p {
        color: #a2a3a5;
        font-size: 16px;
        line-height: 1.6;
    }
`;

export default InteriorShowcase;
