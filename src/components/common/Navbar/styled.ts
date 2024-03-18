import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const NavbarContainer = styled(motion.nav)`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  padding-top: 1rem;
  z-index: 100;
`;
export const NavbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 60rem;
  padding: 1.4rem 2.6rem;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 5rem;
`;
