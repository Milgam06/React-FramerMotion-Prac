import React from "react";

import { Container, Button, Text } from "@/components";

import * as S from "./styled";

export const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <S.MainContentWrapper>
          <Button sizes={true}>
            <Text size={3} weight={900} colors="#fff">
              asdf
            </Text>
          </Button>
          <Button sizes={true}>
            <Text size={3} weight={900} colors="#fff">
              asdasdfasdff
            </Text>
          </Button>
          <Button sizes={true}>
            <Text size={3} weight={900} colors="#fff">
              asasdfasdfdf
            </Text>
          </Button>
        </S.MainContentWrapper>
      </Container>
    </>
  );
};
