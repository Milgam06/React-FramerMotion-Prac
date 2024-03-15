import React from "react";

import { Container } from "@/components";
import { Button } from "@/components/common/Button";

import * as S from "./styled";

export const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <S.MainContentWrapper>
          <Button sizes={true}>wsdf</Button>
          <Button sizes={true}>wsdsadjfhsadkfh;f</Button>
          <Button sizes={true}>wsdf</Button>
        </S.MainContentWrapper>
      </Container>
    </>
  );
};
