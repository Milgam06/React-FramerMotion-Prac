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
  width: 80%;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 5rem;
`;

export const NavbarTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
`;
