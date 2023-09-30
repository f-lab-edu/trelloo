import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";

function BackgroundColors() {
  return (
    <>
      <Menu.Title hasGoBackButton>Background Colors</Menu.Title>
      <ImageCard.ImageList>
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
        <ImageCard.Image url="/public/images/backgrounds/background_1.png" name="background image" />
      </ImageCard.ImageList>
    </>
  );
}

export default BackgroundColors;
