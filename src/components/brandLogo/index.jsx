import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../images/logo/logo_2.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    margin-top: 1px;
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "rgb(73,140,200)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing + "em" : ".1rem"};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BrandLogo = ({
  logoSize,
  textSize,
  color,
  hideLogo = true,
  letterSpacing,
}) => {
  return (
    <BrandLogoContainer>
      {hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Smart Aloggen Logo" />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          SMART ALOGGEN
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
};

export default BrandLogo;
