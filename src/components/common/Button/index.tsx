import * as S from "./styled";

export interface ButtonProps {
  children?: React.ReactNode;
  sizes: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, sizes }) => {
  return (
    <>
      <S.ButtonWrapper sizes={sizes}>{children}</S.ButtonWrapper>
    </>
  );
};
