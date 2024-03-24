import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222; /* Set background color */
  color: #fff; /* Set text color */
  padding: 40px 20px; /* Add padding */
`;

const FooterContent = styled.div`
  width: 100%; /* Set maximum width */
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Space content evenly */
  align-items: center; /* Center align items vertically */
`;

const PhoneNumber = styled.p`
  font-size: 18px; /* Set font size */
`;

const SocialLinks = styled.div`
  display: flex; /* Use flexbox layout */
`;

const SocialLink = styled.a`
  color: #fff; /* Set link color */
  text-decoration: none; /* Remove underline */
  font-size: 24px; /* Set font size */
  margin-right: 20px; /* Add right margin between links */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <PhoneNumber>Phone: +1234567890</PhoneNumber>   
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
