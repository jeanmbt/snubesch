import { Centered, FormWrapper } from "../../styles/global";
import { IBannerProps } from "../../types/Banner.type";
import Form from "../Form";
import { StyledBanner } from "./Banner.style";

export const Banner = (props: IBannerProps) => {
  // TODO: Form container, Info Container
  return (
    <StyledBanner>
      <div>
        FORM CONTENT
        <FormWrapper>
          <Form />
        </FormWrapper>
      </div>
      <div>INFO CONTENT</div>
    </StyledBanner>
  );
};
