import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";

interface Props {
  onClick: (color: string) => void;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colors = new Array(6)
  .fill({})
  .map((_, index) => ({ name: `background color ${index}`, color: getRandomColor() }));

function BackgroundColors({ onClick }: Props) {
  return (
    <>
      <Menu.Title hasGoBackButton>Background Colors</Menu.Title>
      <ImageCard.ImageList>
        {colors.map((color, idx) => (
          <ImageCard.ImageCard key={color.name} onClick={() => onClick(color.color)} name={color.name}>
            <ImageCard.ColorThumbnail color={color.color} />
          </ImageCard.ImageCard>
        ))}
      </ImageCard.ImageList>
    </>
  );
}

export default BackgroundColors;
