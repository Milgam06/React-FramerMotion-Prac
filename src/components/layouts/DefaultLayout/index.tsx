import { Navbar } from "@/components/common";

import * as S from "./styled";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <S.DefaultLayoutContainer>
        <Navbar />
        <S.DefaultLayoutInnerContainer>
          {children}
        </S.DefaultLayoutInnerContainer>
      </S.DefaultLayoutContainer>
    </>
  );
};
