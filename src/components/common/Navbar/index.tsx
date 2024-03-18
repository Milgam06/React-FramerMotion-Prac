import { Text } from "../Text";
import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarInnerContainer>
          <S.NavbarTitleWrapper>
            <Text size={2.4} weight={800} colors="#fff">
              FramerMotion
            </Text>
          </S.NavbarTitleWrapper>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </>
  );
};
