import styled from "styled-components";
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundLevel1};
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;
export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const UserContain = styled.div`
  display: flex;
  padding: 16px;
`;
export const UserInfo = styled.section`
  align-self: center;
  margin-left: 11px;
`;
export const UserName = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;
export const UserJob = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;


export default function Header(props) {
  return (
    <StyledHeader>
      <BannerImg src={props.config.url_banner} />
      <UserContain>
        <UserImg src={`https://github.com/${props.config.github}.png`} />
        <UserInfo>
          <UserName>{props.config.name}</UserName>
          <UserJob>{props.config.job}</UserJob>
        </UserInfo>
      </UserContain>
    </StyledHeader>
  );
}