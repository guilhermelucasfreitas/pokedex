import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <S.NavbarContainer>
      <S.NavbarLogo onClick={navigateToHome}>Pokedex</S.NavbarLogo>
      <S.NavbarLinks>
        <S.NavbarLink onClick={navigateToFavorites}>Favorites</S.NavbarLink>
      </S.NavbarLinks>
    </S.NavbarContainer>
  );
};
