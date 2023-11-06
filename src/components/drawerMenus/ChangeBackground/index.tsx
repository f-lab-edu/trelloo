import React from "react";
import ImageCard from "@components/cards/listCard";
import Menu from "@components/menuList";
import BackgroundPhotos from "../BackgroundPhotos";
import BackgroundColors from "@components/BackgroundColors";
import useFunnel from "@/hooks/useFunnel";

function ChangeBackground() {
  const { Funnel, handleStep } = useFunnel<"changeBackground" | "photos" | "colors">("changeBackground");

  return (
    <div>
      <Funnel>
        <Funnel.Step name="changeBackground">
          <Menu.Title hasGoBackButton>Change Background</Menu.Title>

          <ImageCard.ImageList>
            <div>
              <ImageCard.Image
                url="/public/images/backgrounds/background_1.png"
                onClick={() => handleStep("photos")}
                name="background image"
              />
              <ImageCard.Title>Photos</ImageCard.Title>
            </div>

            <div>
              <ImageCard.Image
                url="/public/images/backgrounds/background_1.png"
                onClick={() => handleStep("colors")}
                name="background image"
              />
              <ImageCard.Title>Colors</ImageCard.Title>
            </div>
          </ImageCard.ImageList>
        </Funnel.Step>

        <Funnel.Step name="photos">
          <BackgroundPhotos />
        </Funnel.Step>

        <Funnel.Step name="colors">
          <BackgroundColors />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

export default ChangeBackground;
