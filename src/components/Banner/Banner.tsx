import { Centered } from "../../styles/global";
import { IBannerProps } from "../../types/Banner.type";
import FormWrapper from "../FormWrapper";

import { StyledBanner } from "./Banner.style";

export const Banner = (props: IBannerProps) => {
  // TODO: Form container, Info Container
  return (
    <StyledBanner>
      <FormWrapper />
      {/* <div>INFO CONTENT</div> */}
    </StyledBanner>
  );
};
