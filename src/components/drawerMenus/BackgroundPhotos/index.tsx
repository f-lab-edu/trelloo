import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";

function BackgroundPhotos() {
  return (
    <>
      <Menu.Title hasGoBackButton>Background Photos</Menu.Title>
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

export default BackgroundPhotos;
