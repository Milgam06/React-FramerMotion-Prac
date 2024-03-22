import { Text } from "../Text";
import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <S.NavbarInnerContainer>
          <Text size={2.2} weight={800} colors="#fff">
            FramerMotion
          </Text>
          <Text size={1.6} weight={600} colors="#fff">
            GIT
          </Text>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </>
  );
};
