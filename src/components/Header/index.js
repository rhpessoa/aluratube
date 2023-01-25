import styled from "styled-components";
import Search from "./Search";
import DarkModeSwitch from "./DarkModeSwitch";
import LogoSVG from "../../assets/Icons/LogoSvg";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;


export default function Header({
  valorDaBusca = { valorDaBusca },
  setValorDaBusca = { setValorDaBusca },
}) {
  return (
    <StyledMenu>
      <LogoSVG />
      <Search valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}
