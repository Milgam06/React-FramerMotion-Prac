import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ButtonProps } from ".";

export const ButtonWrapper = styled(motion.div)<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 2rem;
  width: ${({ sizes }) => (sizes ? "60rem" : "30rem")};
  height: ${({ sizes }) => (sizes ? "10rem" : "6rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(to right bottom, #0076ff, #7400ff); */
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );
  cursor: pointer;
`;
