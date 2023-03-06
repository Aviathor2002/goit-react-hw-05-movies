import { Context, FooterContainer, FooterText, NameApp } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Context>
        <FooterText>
          © 2023
          <NameApp className="font-medium text-gray-900">Movie App.</NameApp>,
          Inc. All rights reserved.
        </FooterText>
      </Context>
    </FooterContainer>
  );
};

export default Footer;
