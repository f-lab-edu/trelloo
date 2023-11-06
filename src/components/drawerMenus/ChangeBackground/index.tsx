import React from "react";
import { DRAWER_MENU_SEARCH_PARAMS, SEARCH_PARAMS_KEY } from "@/constants";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";
import { useSearchParams } from "react-router-dom";

function ChangeBackground() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleMenu = () => {
    searchParams.set(SEARCH_PARAMS_KEY.MENU, DRAWER_MENU_SEARCH_PARAMS.PHOTOS);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Menu.Title hasGoBackButton>Change Background</Menu.Title>

      <ImageCard.ImageList>
        <div>
          <ImageCard.Image
            url="/public/images/backgrounds/background_1.png"
            onClick={handleMenu}
            name="background image"
          />
          <ImageCard.Title>Photos</ImageCard.Title>
        </div>

        <div>
          <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
          <ImageCard.Title>Colors</ImageCard.Title>
        </div>
      </ImageCard.ImageList>
    </div>
  );
}

export default ChangeBackground;
