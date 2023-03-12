import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin: 0 1rem;
`;

const Header = styled.header`
  text-align: center;
  padding: 4rem 0;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const About = styled.section`
  padding: 4rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Projects = styled.section`
  padding: 4rem;
`;

const Project = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Contact = styled.section`
  background-color: #f2f2f2;
  padding: 4rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const ContactButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 1.2rem;
`;

function Responsive() {
  return (
    <>
      <Navbar>
        <NavbarBrand>My Portfolio</NavbarBrand>
        <NavbarLinks>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Projects</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarLinks>
      </Navbar>
      <Header>
        <HeaderTitle>Hi, I'm John Doe</HeaderTitle>
        <HeaderSubtitle>Full Stack Developer</HeaderSubtitle>
      </Header>
      <About>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          magna id semper sollicitudin. Integer accumsan, risus a semper
          congue, ipsum leo dapibus ligula, a malesuada quam quam a enim.
        </AboutText>
      </About>
      <Projects>
        <Project>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod magna id semper sollicitudin.
          </ProjectDescription>
        </Project>
        <Project>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod magna id semper sollicitudin.
          </ProjectDescription>
        </Project>
      </Projects>
      <Contact>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactForm>
          <ContactInput type="text" placeholder="Name" />
          <ContactInput type="email" placeholder="Email" />
          <ContactInput type="text" placeholder="Subject" />
          <ContactInput type="text" placeholder="Message" />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Contact>
      <Footer>Copyright &copy; 2023</Footer>
    </>
  );
}

export default Responsive;
