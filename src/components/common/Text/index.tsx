import * as S from "./styled";

export interface TextProps {
  children: React.ReactNode;
  size: number;
  weight: number;
}

export const Text: React.FC<TextProps> = ({children, size=1, weight}) => {
  return (
    <>
      <S.TextElement
    </>
  );
};
