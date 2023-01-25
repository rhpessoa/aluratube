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


export default function Banner() {
  return (
    <StyledHeader>
      <BannerImg src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <UserContain>
        <UserImg src={`https://github.com/rhpessoa.png`} />
        <UserInfo>
          <UserName>Rafael Henrique (Donodo)</UserName>
          <UserJob>Desenvolvedor Front-end</UserJob>
        </UserInfo>
      </UserContain>
    </StyledHeader>
  );
}