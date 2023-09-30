import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";

interface Props {
  onClick: (image: string) => void;
}

function BackgroundPhotos({ onClick }: Props) {
  return (
    <>
      <Menu.Title hasGoBackButton>Background Photos</Menu.Title>
      <ImageCard.ImageList>
        {/* temporal mock data */}
        {new Array(10)
          .fill({
            url: "/public/images/backgrounds/background_1.png",
            name: "background image",
          })
          .map((image) => (
            <ImageCard.Image key={image.url} onClick={() => onClick(image.url)} url={image.url} name={image.name} />
          ))}
      </ImageCard.ImageList>
    </>
  );
}

export default BackgroundPhotos;
