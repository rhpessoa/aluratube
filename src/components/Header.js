import styled from "styled-components";
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const UserInfo = styled.section`
  align-self: center;
  margin-left: 11px;
`;
export const UserName = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
export const UserJob = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #666666;
`;
