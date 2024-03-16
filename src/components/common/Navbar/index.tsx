import { Text } from "@choi138/react-text";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarInnerContainer>
          <S.NavbarTitleWrapper>
            <Text size={2} color="#fff" weight={800}>
              FramerMotion
            </Text>
          </S.NavbarTitleWrapper>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </>
  );
};
