import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { StyledHome } from "./Home.style";

export const Home = () => {
  return (
    <StyledHome>
      <Header></Header>

      <Banner></Banner>

      <Section sectionType="short-info" bkg="none"></Section>
      {/* why snubes */}
      <Section sectionType="why" bkg="img"></Section>
      {/* testimonials */}
      <Section sectionType="testimonials" bkg="none"></Section>
    </StyledHome>
  );
};
