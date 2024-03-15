import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ButtonProps } from ".";

export const ButtonWrapper = styled(motion.div)<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 2rem;
  width: ${({ sizes }) => (sizes ? "40rem" : "30rem")};
  height: ${({ sizes }) => (sizes ? "8rem" : "6rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
  background: linear-gradient(to right bottom, #0076ff, #7400ff);
`;
