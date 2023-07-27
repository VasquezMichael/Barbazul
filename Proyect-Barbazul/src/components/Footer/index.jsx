import { Section } from "./style";
import { Icons } from "./Icons";
import Logo from "./Logo";
import Credits from "./Credits";
const Footer = () => {
  return (
    <>
      <Section>
        <Logo />
        <Icons />
        <p>vasquez.michael.steven@gmail.com</p>
        <p>© BarberShop, todos los derechos reservados</p>
      </Section>
      <Credits />
    </>
  );
};

export default Footer;
