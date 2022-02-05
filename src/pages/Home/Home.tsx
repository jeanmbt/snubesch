import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/SectionWrapper";
import { Centered } from "../../styles/global";
import { StyledHome } from "./Home.style";

export const Home = () => {
  return (
    <StyledHome>
      {/* <Header /> */}
      <Banner />

      {/* <Section sectionType="short-info" bkg="none">
        <Centered>short info</Centered>
      </Section>

      <Section sectionType="why" bkg="img">
        <Centered>why snubes?</Centered>
      </Section>

      <Section sectionType="testimonials" bkg="none">
        <Centered>Testimonials</Centered>
      </Section>

      <Footer /> */}
    </StyledHome>
  );
};
