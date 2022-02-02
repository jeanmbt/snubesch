import { ISectionWrapperProps } from "../../types/SectionWrapper.type";
import { StyledSectionWrapper } from "./SectionWrapper.style";

export const SectionWrapper = (props: ISectionWrapperProps) => {
  return <StyledSectionWrapper>{props.children}</StyledSectionWrapper>;
};
