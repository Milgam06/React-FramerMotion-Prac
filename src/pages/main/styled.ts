import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MainContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 2rem;
`;

export const FirstFramer = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  background-color: red;
`;
