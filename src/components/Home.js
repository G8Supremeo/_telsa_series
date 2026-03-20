import React from 'react'
import Styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        id='model-s'
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        accentColor='#c41520'
        darkBg={true}
        modelSlug='model-s'
      />
      <Section
        id='model-y'
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        accentColor='#2f0ee5ff'
        modelSlug='model-y'
      />
      <Section
        id='model-3'
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        accentColor='#1a73e8'
        modelSlug='model-3'
      />
      <Section
        id='model-x'
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        accentColor='#2f7d32'
        darkBg
        modelSlug='model-x'
      />
      <Section
        id='solar-roof'
        title='Solar and Storage'
        description='Let nature do the work and serve you'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
        accentColor='#e0e0e0'
        darkBg
      />
      <Section
        id='solar-panels'
        title='Solar Roofs'
        description='Cost less than the real iron sheets'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
        accentColor='#e0e0e0'
      />
      <Section
        id='accessories'
        title='Accessories'
        description='We can connect you to nature'
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
        accentColor='#e0e0e0'
      />
    </Container>
  )
}

export default Home

const Container = Styled.div`
    height: 100vh;
`
