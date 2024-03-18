import * as S from "./styled";

export interface ButtonProps {
  children?: React.ReactNode;
  sizes: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, sizes }) => {
  return (
    <>
      <S.ButtonWrapper
        sizes={sizes}
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        whileHover={{ scale: 1.08, y: -10, transition: { duration: 0.2 } }}
      >
        {children}
      </S.ButtonWrapper>
    </>
  );
};
