import React from "react";
import { useDispatch } from "react-redux";
import useFunnel from "@/hooks/useFunnel";
import { changeBackgroundColor, changeBackgroundImage } from "@/store/slices/background";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";
import BackgroundPhotos from "../BackgroundPhotos";
import BackgroundColors from "@components/BackgroundColors";
import BackgroundProperties from "../BackgroundProperties";

function ChangeBackground() {
  const dispatch = useDispatch();
  const { Funnel, handleStep } =
    useFunnel<"change-background" | "photos" | "colors" | "properties">("change-background");

  const handleBackgroundChangeImage = (image: string) => {
    dispatch(changeBackgroundImage(image));
  };

  const handlebackgroundColorChange = (color: string) => {
    dispatch(changeBackgroundColor(color));
  };

  return (
    <div>
      <Funnel>
        <Funnel.Step name="change-background">
          <Menu.Title hasGoBackButton>Change Background</Menu.Title>

          <ImageCard.ImageList>
            <div>
              <ImageCard.ImageCard onClick={() => handleStep("photos")} name="background image">
                <ImageCard.ImageThumbnail url="/public/images/backgrounds/background_1.png" />
              </ImageCard.ImageCard>
              <ImageCard.Title>Photos</ImageCard.Title>
            </div>

            <div>
              <ImageCard.ImageCard onClick={() => handleStep("colors")} name="background image">
                <ImageCard.ImageThumbnail url="/public/images/backgrounds/background_1.png" />
              </ImageCard.ImageCard>
              <ImageCard.Title>Colors</ImageCard.Title>
            </div>

            <div>
              <ImageCard.ImageCard onClick={() => handleStep("properties")} name="background image">
                <ImageCard.ImageThumbnail url="/public/images/backgrounds/background_1.png" />
              </ImageCard.ImageCard>
              <ImageCard.Title>Change Properties</ImageCard.Title>
            </div>
          </ImageCard.ImageList>
        </Funnel.Step>

        <Funnel.Step name="properties">
          <BackgroundProperties />
        </Funnel.Step>

        <Funnel.Step name="photos">
          <BackgroundPhotos onClick={handleBackgroundChangeImage} />
        </Funnel.Step>

        <Funnel.Step name="colors">
          <BackgroundColors onClick={handlebackgroundColorChange} />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

export default ChangeBackground;
