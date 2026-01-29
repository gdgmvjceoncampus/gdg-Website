import { devices } from "@/constants/theme";
import { keyframes, styled } from "styled-components";

const fadeOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(20);
  }
`;
export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${fadeOut} 0.7s ease-in-out 2.4s forwards;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0);
  }
`;
