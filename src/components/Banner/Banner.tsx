import { IBannerProps } from "../../types/Banner.type";
import UserForm from "../FormWrapper";

import { StyledBanner } from "./Banner.style";

export const Banner = (props: IBannerProps) => {
  // TODO: Form container, Info Container
  return (
    <StyledBanner>
      <UserForm />
      {/* <div>INFO CONTENT</div> */}
    </StyledBanner>
  );
};
