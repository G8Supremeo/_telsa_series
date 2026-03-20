import React, { useState, useEffect } from 'react'
import Styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const carModels = [
  { id: 'model-s', name: 'Model S', image: 'model-s.jpg', basePrice: 74990 },
  { id: 'model-3', name: 'Model 3', image: 'model-3.jpg', basePrice: 38990 },
  { id: 'model-x', name: 'Model X', image: 'model-x.jpg', basePrice: 79990 },
  { id: 'model-y', name: 'Model Y', image: 'model-y.jpg', basePrice: 43990 },
]

const colors = [
  { name: 'Pearl White', hex: '#f2f2f2', overlay: 'rgba(242,242,242,0.12)', price: 0 },
  { name: 'Solid Black', hex: '#1a1a1a', overlay: 'rgba(0,0,0,0.25)', price: 1500 },
  { name: 'Midnight Silver', hex: '#71797E', overlay: 'rgba(113,121,126,0.18)', price: 1500 },
  { name: 'Deep Blue', hex: '#1a2b5f', overlay: 'rgba(26,43,95,0.2)', price: 2000 },
  { name: 'Ultra Red', hex: '#c41520', overlay: 'rgba(196,21,32,0.15)', price: 2500 },
]

const wheels = [
  { name: '19" Tempest', price: 0 },
  { name: '21" Arachnid', price: 4500 },
]

const interiors = [
  { name: 'All Black', price: 0 },
  { name: 'Black & White', price: 2000 },
  { name: 'Cream', price: 2000 },
]

function Configurator() {
  const [selectedCar, setSelectedCar] = useState(carModels[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedWheel, setSelectedWheel] = useState(wheels[0])
  const [selectedInterior, setSelectedInterior] = useState(interiors[0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const totalPrice = selectedCar.basePrice + selectedColor.price + selectedWheel.price + selectedInterior.price

  return (
    <PageWrap>
      <Fade direction="up" triggerOnce>
        <TopBar>
          <BackLink to="/">← Back to Home</BackLink>
          <PageTitle>Build Your TELSA</PageTitle>
          <Spacer />
        </TopBar>
      </Fade>

      <ConfigLayout>
        {/* Car Preview */}
        <PreviewSection>
          <Fade direction="up" triggerOnce>
            <CarPreviewWrap>
              <ColorOverlay $color={selectedColor.overlay} />
              <CarImage src={`/images/${selectedCar.image}`} alt={selectedCar.name} />
            </CarPreviewWrap>
            <PreviewLabel>{selectedCar.name} — {selectedColor.name}</PreviewLabel>
          </Fade>
        </PreviewSection>

        {/* Options Panel */}
        <OptionsPanel>
          {/* Model Selection */}
          <Fade direction="up" triggerOnce>
            <OptionGroup>
              <OptionLabel>Select Model</OptionLabel>
              <ModelGrid>
                {carModels.map(car => (
                  <ModelCard
                    key={car.id}
                    $active={selectedCar.id === car.id}
                    onClick={() => setSelectedCar(car)}
                  >
                    <ModelThumb src={`/images/${car.image}`} alt={car.name} />
                    <ModelName>{car.name}</ModelName>
                    <ModelPrice>From ${car.basePrice.toLocaleString()}</ModelPrice>
                  </ModelCard>
                ))}
              </ModelGrid>
            </OptionGroup>
          </Fade>

          {/* Color */}
          <Fade direction="up" delay={100} triggerOnce>
            <OptionGroup>
              <OptionLabel>Exterior Color <OptionExtra>{selectedColor.name}{selectedColor.price > 0 && ` (+$${selectedColor.price.toLocaleString()})`}</OptionExtra></OptionLabel>
              <SwatchRow>
                {colors.map(color => (
                  <ColorSwatch
                    key={color.name}
                    $color={color.hex}
                    $active={selectedColor.name === color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                  />
                ))}
              </SwatchRow>
            </OptionGroup>
          </Fade>

          {/* Wheels */}
          <Fade direction="up" delay={200} triggerOnce>
            <OptionGroup>
              <OptionLabel>Wheels</OptionLabel>
              <ChoiceRow>
                {wheels.map(wheel => (
                  <ChoiceCard
                    key={wheel.name}
                    $active={selectedWheel.name === wheel.name}
                    onClick={() => setSelectedWheel(wheel)}
                  >
                    <ChoiceName>{wheel.name}</ChoiceName>
                    <ChoicePrice>{wheel.price === 0 ? 'Included' : `+$${wheel.price.toLocaleString()}`}</ChoicePrice>
                  </ChoiceCard>
                ))}
              </ChoiceRow>
            </OptionGroup>
          </Fade>

          {/* Interior */}
          <Fade direction="up" delay={300} triggerOnce>
            <OptionGroup>
              <OptionLabel>Interior</OptionLabel>
              <InteriorPreview src="/images/new-interior.jpg" alt="Interior" />
              <ChoiceRow>
                {interiors.map(interior => (
                  <ChoiceCard
                    key={interior.name}
                    $active={selectedInterior.name === interior.name}
                    onClick={() => setSelectedInterior(interior)}
                  >
                    <ChoiceName>{interior.name}</ChoiceName>
                    <ChoicePrice>{interior.price === 0 ? 'Included' : `+$${interior.price.toLocaleString()}`}</ChoicePrice>
                  </ChoiceCard>
                ))}
              </ChoiceRow>
            </OptionGroup>
          </Fade>

          {/* Summary */}
          <Fade direction="up" delay={400} triggerOnce>
            <SummaryCard>
              <SummaryTitle>Your {selectedCar.name}</SummaryTitle>
              <SummaryRow>
                <span>Base Price</span>
                <span>${selectedCar.basePrice.toLocaleString()}</span>
              </SummaryRow>
              {selectedColor.price > 0 && (
                <SummaryRow>
                  <span>{selectedColor.name}</span>
                  <span>+${selectedColor.price.toLocaleString()}</span>
                </SummaryRow>
              )}
              {selectedWheel.price > 0 && (
                <SummaryRow>
                  <span>{selectedWheel.name}</span>
                  <span>+${selectedWheel.price.toLocaleString()}</span>
                </SummaryRow>
              )}
              {selectedInterior.price > 0 && (
                <SummaryRow>
                  <span>{selectedInterior.name} Interior</span>
                  <span>+${selectedInterior.price.toLocaleString()}</span>
                </SummaryRow>
              )}
              <TotalRow>
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </TotalRow>
              <OrderButton>Order Now</OrderButton>
            </SummaryCard>
          </Fade>
        </OptionsPanel>
      </ConfigLayout>
    </PageWrap>
  )
}

export default Configurator

/* --- Styled Components --- */
const PageWrap = Styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  padding-top: 80px;
`

const TopBar = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px 40px;

  @media (max-width: 768px) {
    padding: 0 24px 24px;
    flex-direction: column;
    gap: 12px;
  }
`

const BackLink = Styled(Link)`
  color: rgba(255,255,255,0.5) !important;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none !important;
  transition: color 0.2s;

  &:hover {
    color: #fff !important;
  }
`

const PageTitle = Styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Spacer = Styled.div`
  width: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`

const ConfigLayout = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 0 60px 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 24px 60px;
  }
`

const PreviewSection = Styled.div`
  position: sticky;
  top: 100px;
  height: fit-content;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
  }
`

const CarPreviewWrap = Styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/10;
`

const ColorOverlay = Styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$color};
  z-index: 1;
  mix-blend-mode: color;
  pointer-events: none;
  transition: background 0.5s ease;
`

const CarImage = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PreviewLabel = Styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 1px;
`

const OptionsPanel = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const OptionGroup = Styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 28px;
`

const OptionLabel = Styled.h3`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.5);
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const OptionExtra = Styled.span`
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: rgba(255,255,255,0.3);
  font-size: 12px;
`

const ModelGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ModelCard = Styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${props => props.$active ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.06)'};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? 'rgba(255,255,255,0.08)' : 'transparent'};

  &:hover {
    border-color: rgba(255,255,255,0.2);
  }
`

const ModelThumb = Styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`

const ModelName = Styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding: 10px 12px 2px;
`

const ModelPrice = Styled.div`
  font-size: 12px;
  color: rgba(255,255,255,0.4);
  padding: 2px 12px 10px;
`

const SwatchRow = Styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const ColorSwatch = Styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${props => props.$color};
  cursor: pointer;
  border: 3px solid ${props => props.$active ? '#fff' : 'transparent'};
  box-shadow: ${props => props.$active ? '0 0 0 2px rgba(255,255,255,0.3)' : 'inset 0 0 0 1px rgba(255,255,255,0.15)'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const ChoiceRow = Styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const ChoiceCard = Styled.div`
  flex: 1;
  min-width: 120px;
  padding: 16px;
  border-radius: 10px;
  border: 2px solid ${props => props.$active ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.06)'};
  background: ${props => props.$active ? 'rgba(255,255,255,0.08)' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: rgba(255,255,255,0.2);
  }
`

const ChoiceName = Styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
`

const ChoicePrice = Styled.div`
  font-size: 12px;
  color: rgba(255,255,255,0.4);
`

const InteriorPreview = Styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`

const SummaryCard = Styled.div`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px;
`

const SummaryTitle = Styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px;
`

const SummaryRow = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`

const TotalRow = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`

const OrderButton = Styled.button`
  width: 100%;
  margin-top: 24px;
  height: 48px;
  background: linear-gradient(135deg, #e82127, #ff4f54);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(232, 33, 39, 0.4);
  }
`
