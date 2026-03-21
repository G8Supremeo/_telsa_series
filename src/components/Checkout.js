import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Get order details from Configurator state
  const orderDetails = location.state;

  // If someone goes to /checkout directly without configuring a car, send them back
  useEffect(() => {
    if (!orderDetails) {
      navigate('/configurator');
    }
    window.scrollTo(0, 0);
  }, [orderDetails, navigate]);

  if (!orderDetails) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Briefly show success, then redirect to home
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  return (
    <Container>
      {success ? (
        <SuccessModal>
          <Fade direction="up">
            <CheckRing>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </CheckRing>
            <h2>Payment Successful!</h2>
            <p>Your custom {orderDetails.selectedCar.name} has been ordered.</p>
            <p>Redirecting to home...</p>
          </Fade>
        </SuccessModal>
      ) : (
        <Fade direction="up" triggerOnce>
          <CheckoutWrapper>
            <FormSection>
              <h2>Provide Your Details</h2>
              <form onSubmit={handlePayment}>
                <InputGroup>
                  <label>Full Name</label>
                  <input type="text" placeholder="Elon Musk" required />
                </InputGroup>
                
                <InputGroup>
                  <label>Email Address</label>
                  <input type="email" placeholder="elon@tesla.com" required />
                </InputGroup>
                
                <InputGroup>
                  <label>Delivery Address</label>
                  <input type="text" placeholder="1 Tesla Road, Austin, TX" required />
                </InputGroup>

                <SectionDivider />
                <h2>Payment Details</h2>

                <InputGroup>
                  <label>Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" pattern="[0-9\s]+" maxLength="19" required />
                </InputGroup>

                <RowGroup>
                  <InputGroup>
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" maxLength="5" required />
                  </InputGroup>
                  <InputGroup>
                    <label>CVC</label>
                    <input type="text" placeholder="123" maxLength="4" required />
                  </InputGroup>
                </RowGroup>

                <PayButton type="submit" disabled={loading}>
                  {loading ? 'Processing...' : `Pay $${orderDetails.totalPrice.toLocaleString()}`}
                </PayButton>
              </form>
            </FormSection>

            <SummarySection>
              <h3>Order Summary</h3>
              <SummaryItem>
                <span>{orderDetails.selectedCar.name}</span>
                <span>${orderDetails.selectedCar.basePrice.toLocaleString()}</span>
              </SummaryItem>
              
              {orderDetails.selectedColor.price > 0 && (
                <SummaryItem>
                  <span>{orderDetails.selectedColor.name} Paint</span>
                  <span>+${orderDetails.selectedColor.price.toLocaleString()}</span>
                </SummaryItem>
              )}
              
              {orderDetails.selectedWheel.price > 0 && (
                <SummaryItem>
                  <span>{orderDetails.selectedWheel.name}</span>
                  <span>+${orderDetails.selectedWheel.price.toLocaleString()}</span>
                </SummaryItem>
              )}
              
              {orderDetails.selectedInterior.price > 0 && (
                <SummaryItem>
                  <span>{orderDetails.selectedInterior.name} Interior</span>
                  <span>+${orderDetails.selectedInterior.price.toLocaleString()}</span>
                </SummaryItem>
              )}
              
              <TotalLine />
              
              <SummaryTotal>
                <span>Total Due</span>
                <span>${orderDetails.totalPrice.toLocaleString()}</span>
              </SummaryTotal>

              <CarPreviewContainer>
                 <ColorOverlay $color={orderDetails.selectedColor.overlay} />
                 <CarPreviewImage src={`/images/${orderDetails.selectedCar.image}`} alt={orderDetails.selectedCar.name} />
              </CarPreviewContainer>
            </SummarySection>
          </CheckoutWrapper>
        </Fade>
      )}
    </Container>
  );
}

const Container = Styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
  padding: 100px 20px 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CheckoutWrapper = Styled.div`
  display: flex;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
  
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

const FormSection = Styled.div`
  flex: 1.2;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 40px;
  
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #fff;
  }
`;

const InputGroup = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  label {
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  input {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 14px 16px;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.08);
    }
  }
`;

const RowGroup = Styled.div`
  display: flex;
  gap: 20px;
  
  > div {
    flex: 1;
  }
`;

const SectionDivider = Styled.div`
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 32px 0;
`;

const PayButton = Styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${props => props.disabled ? '#333' : '#3e6ae1'};
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    background: ${props => props.disabled ? '#333' : '#3457b2'};
  }
`;

const SummarySection = Styled.div`
  flex: 1;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 30px;
  height: fit-content;
  
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #fff;
  }
`;

const SummaryItem = Styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
`;

const TotalLine = Styled.div`
  height: 1px;
  background: rgba(255,255,255,0.2);
  margin: 20px 0;
`;

const SummaryTotal = Styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const CarPreviewContainer = Styled.div`
  position: relative;
  margin-top: 30px;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/10;
  background: rgba(0,0,0,0.5);
`;

const ColorOverlay = Styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$color};
  z-index: 1;
  mix-blend-mode: color;
  pointer-events: none;
`;

const CarPreviewImage = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SuccessModal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  
  h2 {
    font-size: 32px;
    margin: 24px 0 16px;
  }
  
  p {
    color: rgba(255,255,255,0.7);
    margin-bottom: 8px;
  }
`;

const CheckRing = Styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #2e8b57;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export default Checkout;
