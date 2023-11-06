import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";

interface Props {
  onClick: (image: string) => void;
}

const imageCardList = new Array(6).fill({}).map(
  (image, idx) =>
    (image = {
      name: `background image ${idx + 1}`,
      url: `/public/images/backgrounds/background_${idx + 1}.png`,
    }),
);

function BackgroundPhotos({ onClick }: Props) {
  return (
    <>
      <Menu.Title hasGoBackButton>Background Photos</Menu.Title>
      <ImageCard.ImageList>
        {imageCardList.map((image, idx) => (
          <ImageCard.ImageCard key={image.url} onClick={() => onClick(image.url)} name={image.name}>
            <ImageCard.ImageThumbnail url={image.url} />
          </ImageCard.ImageCard>
        ))}
      </ImageCard.ImageList>
    </>
  );
}

export default BackgroundPhotos;
