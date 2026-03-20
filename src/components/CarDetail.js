import React, { useState, useEffect } from 'react'
import Styled, { keyframes } from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const carData = {
  'model-s': {
    title: 'Model S',
    tagline: 'Built for Speed & Endurance',
    description: 'The ultimate in electric performance. With up to 390 miles of range and the quickest acceleration of any production car ever made.',
    heroImage: 'model-s.jpg',
    features: [
      { title: 'Cinematic Sound', desc: 'An immersive 22-speaker, 960-watt audio system with Active Road Noise Reduction keeps the cabin quiet and the music crystal clear.', image: 'audio.jpg' },
      { title: 'Always Connected', desc: 'Multi-device Bluetooth, wireless charging, and integrated navigation keep you connected wherever you go.', image: 'connected.jpg' },
      { title: 'Gaming Ready', desc: 'Up to 10 teraflops of processing power enables in-car gaming on-par with today\'s newest consoles.', image: 'game.jpg' },
    ],
    specs: { range: '390 mi', acceleration: '1.99s', topSpeed: '200 mph', peakPower: '1,020 hp' },
    accentColor: '#c41520',
  },
  'model-3': {
    title: 'Model 3',
    tagline: 'The Future of Driving',
    description: 'Model 3 comes with the option of dual motor all-wheel drive, 20" performance wheels and brakes, and lowered suspension for total control.',
    heroImage: 'model-3.jpg',
    features: [
      { title: 'Stay Connected', desc: 'Wirelessly connect your phone and access everything from calls to music with full touchscreen integration.', image: 'connected.jpg' },
      { title: 'Premium Audio', desc: 'Immersive, room-like sound from a 15-speaker audio system with the option of Active Road Noise Reduction.', image: 'audio.jpg' },
      { title: 'Arcade Gaming', desc: 'Play your favorite games from the comfort of your car with responsive controls and stunning graphics.', image: 'game.jpg' },
    ],
    specs: { range: '400 mi', acceleration: '2.99s', topSpeed: '180 mph', peakPower: '900 hp' },
    accentColor: '#1a73e8',
  },
  'model-x': {
    title: 'Model X',
    tagline: 'The SUV Reinvented',
    description: 'Model X has a drag coefficient of just 0.24 Cd, the lowest of any SUV on the planet. Falcon Wing doors provide easy access to the second and third rows.',
    heroImage: 'model-x.jpg',
    features: [
      { title: 'Entertainment Hub', desc: 'A 17" cinematic display with premium connectivity lets passengers enjoy gaming and streaming on the go.', image: 'game.jpg' },
      { title: 'Premium Interior', desc: 'The refreshed interior features premium materials, ambient lighting, and expansive glass for a cabin like no other.', image: 'new-interior.jpg' },
      { title: 'Studio Sound', desc: '22 speakers deliver a studio-quality listening experience with active noise cancellation for a serene ride.', image: 'audio.jpg' },
    ],
    specs: { range: '350 mi', acceleration: '1.55s', topSpeed: '150 mph', peakPower: '1,130 hp' },
    accentColor: '#2f7d32',
  },
  'model-y': {
    title: 'Model Y',
    tagline: 'Designed for Families',
    description: 'Model Y provides maximum versatility with 76 cubic feet of cargo space and intuitive functionality that fits your lifestyle.',
    heroImage: 'model-y.jpg',
    features: [
      { title: 'Connected Living', desc: 'Over-the-air software updates introduce new features, improve performance, and enhance the ownership experience.', image: 'connected.jpg' },
      { title: 'Refined Interior', desc: 'Minimalist design meets maximum comfort with a panoramic glass roof and premium seating for up to seven.', image: 'new-interior.jpg' },
      { title: 'Immersive Audio', desc: 'Premium audio with immersive sound and active noise cancelation delivers an unmatched listening experience.', image: 'audio.jpg' },
    ],
    specs: { range: '410 mi', acceleration: '2.05s', topSpeed: '190 mph', peakPower: '1,040 hp' },
    accentColor: '#2f0ee5',
  }
}

function CarDetail() {
  const { modelId } = useParams()
  const car = carData[modelId]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [modelId])

  if (!car) {
    return (
      <NotFound>
        <h1>Model not found</h1>
        <BackLink to="/">← Back to Home</BackLink>
      </NotFound>
    )
  }

  return (
    <PageWrap>
      {/* Hero Section */}
      <HeroSection bgImage={car.heroImage}>
        <HeroOverlay />
        <HeroContent>
          <Fade direction="up" triggerOnce>
            <AccentBar $color={car.accentColor} />
            <HeroTitle>{car.title}</HeroTitle>
            <HeroTagline>{car.tagline}</HeroTagline>
            <HeroDescription>{car.description}</HeroDescription>
            <HeroButtons>
              <PrimaryBtn as={Link} to="/configurator">Configure Yours</PrimaryBtn>
              <SecondaryBtn as={Link} to="/">Back to Home</SecondaryBtn>
            </HeroButtons>
          </Fade>
        </HeroContent>
        <ScrollIndicator $visible={!scrolled}>
          <span>Scroll to explore</span>
          <img src="/images/down-arrow.svg" alt="scroll" />
        </ScrollIndicator>
      </HeroSection>

      {/* Specs Section */}
      <SpecsSection>
        <Fade direction="up" triggerOnce>
          <SectionLabel>Performance</SectionLabel>
          <SpecsGrid>
            <SpecCard>
              <SpecValue>{car.specs.range}</SpecValue>
              <SpecLabel>Range (EPA est.)</SpecLabel>
            </SpecCard>
            <SpecCard>
              <SpecValue>{car.specs.acceleration}</SpecValue>
              <SpecLabel>0-60 mph</SpecLabel>
            </SpecCard>
            <SpecCard>
              <SpecValue>{car.specs.topSpeed}</SpecValue>
              <SpecLabel>Top Speed</SpecLabel>
            </SpecCard>
            <SpecCard>
              <SpecValue>{car.specs.peakPower}</SpecValue>
              <SpecLabel>Peak Power</SpecLabel>
            </SpecCard>
          </SpecsGrid>
        </Fade>
      </SpecsSection>

      {/* Features Section */}
      <FeaturesSection>
        <Fade direction="up" triggerOnce>
          <SectionLabel>Features</SectionLabel>
        </Fade>
        <FeaturesGrid>
          {car.features.map((feature, index) => (
            <Fade key={index} direction="up" delay={index * 150} triggerOnce>
              <FeatureCard>
                <FeatureImage src={`/images/${feature.image}`} alt={feature.title} />
                <FeatureInfo>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.desc}</FeatureDesc>
                </FeatureInfo>
              </FeatureCard>
            </Fade>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* CTA Section */}
      <CTASection>
        <Fade direction="up" triggerOnce>
          <CTATitle>Ready to experience {car.title}?</CTATitle>
          <CTAButtons>
            <PrimaryBtn as={Link} to="/configurator">Build Your {car.title}</PrimaryBtn>
            <SecondaryBtn href="#">Schedule a Test Drive</SecondaryBtn>
          </CTAButtons>
        </Fade>
      </CTASection>
    </PageWrap>
  )
}

export default CarDetail

/* --- Animations --- */
const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(6px) translateX(-50%); }
  60% { transform: translateY(3px) translateX(-50%); }
`

/* --- Styled Components --- */
const PageWrap = Styled.div`
  min-height: 100vh;
  background: #000;
`

const NotFound = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #000;
  color: #fff;
`

const BackLink = Styled(Link)`
  color: #e82127 !important;
  font-weight: 600;
  text-decoration: underline !important;
`

/* Hero */
const HeroSection = Styled.section`
  position: relative;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`

const HeroOverlay = Styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%);
`

const HeroContent = Styled.div`
  position: relative;
  z-index: 2;
  padding: 60px 60px 100px;
  max-width: 700px;

  @media (max-width: 768px) {
    padding: 40px 24px 80px;
  }
`

const AccentBar = Styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: ${props => props.$color || '#e82127'};
  margin-bottom: 20px;
`

const HeroTitle = Styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 0 8px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`

const HeroTagline = Styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255,255,255,0.7);
  margin: 0 0 16px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const HeroDescription = Styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
  margin: 0 0 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const HeroButtons = Styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const PrimaryBtn = Styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 32px;
  background: rgba(255,255,255,0.95);
  color: #171a20 !important;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none !important;
  border: none;

  &:hover {
    background: #fff;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }
`

const SecondaryBtn = Styled(PrimaryBtn)`
  background: rgba(255,255,255,0.1);
  color: #fff !important;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.5);
  }
`

const ScrollIndicator = Styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.5s ease;

  span {
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  img {
    height: 16px;
    filter: invert(1);
    opacity: 0.5;
    animation: ${bounce} 2s infinite;
  }
`

/* Specs */
const SpecsSection = Styled.section`
  padding: 80px 60px;
  background: #111;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`

const SectionLabel = Styled.h3`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 40px;
`

const SpecsGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const SpecCard = Styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.15);
    transform: translateY(-4px);
  }
`

const SpecValue = Styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: -1px;
`

const SpecLabel = Styled.div`
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
`

/* Features */
const FeaturesSection = Styled.section`
  padding: 80px 60px;
  background: #0a0a0a;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`

const FeaturesGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const FeatureCard = Styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255,255,255,0.12);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }
`

const FeatureImage = Styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

const FeatureInfo = Styled.div`
  padding: 24px;
`

const FeatureTitle = Styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 8px;
`

const FeatureDesc = Styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255,255,255,0.5);
  margin: 0;
`

/* CTA */
const CTASection = Styled.section`
  padding: 100px 60px;
  background: #111;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`

const CTATitle = Styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 32px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const CTAButtons = Styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
