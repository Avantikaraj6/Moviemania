import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Latest Avatar the Way of Water
            with a Disney+ subsription. As of 08/26/22.The Disney Bandle will
            increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width:100%;

`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  height: 100%;
  background-size: 100% 100%;
  z-index: -1;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  font-size: 18px;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  display: block;

  &:hover {
    background-color: #16527A;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
