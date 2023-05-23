import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a73e8;
  color: #ffffff;
  padding: 16px;
  font-size: 24px;
`;

export const NavbarLogo = styled.div`
  font-weight: bold;
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const NavbarLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;