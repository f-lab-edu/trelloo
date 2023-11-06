import React from "react";
import * as S from "./style";
import Menu from "@components/menuList";
import Properties from "@components/properties";

function BackgroundProperties() {
  return (
    <S.Container>
      <Menu.Title hasGoBackButton>Background Properties</Menu.Title>
      <div>
        <Properties.Group name="Post Processing">
          <Properties.Property name="SSAO">
            <Properties.ToggleControl id="SSAO" />
          </Properties.Property>

          <Properties.Property name="Bloom">
            <Properties.ToggleControl id="Bloom" />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Fog">
          <Properties.Property name="FogActive">
            <Properties.ToggleControl id="FogActive" />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Appearance">
          <Properties.Property name="Transparency">
            <Properties.SliderControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Environment">
          <Properties.Property name="Equirect">
            <Properties.ToggleControl id="Equirect" />
          </Properties.Property>

          <Properties.Property name="Equirect">
            <Properties.SliderControl />
          </Properties.Property>

          <Properties.Property name="Equirect">
            <Properties.ImageControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Tone Mapping">
          <Properties.Property name="Mode">
            <Properties.SelectControl />
          </Properties.Property>

          <Properties.Property name="Exposure">
            <Properties.SliderControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Material Property">
          <Properties.Property name="MeshColor">
            <Properties.ColorControl color="lightgray" />
          </Properties.Property>

          <Properties.Property name="Shininess">
            <Properties.SliderControl />
          </Properties.Property>

          <Properties.Property name="Opacity">
            <Properties.SliderControl />
          </Properties.Property>
        </Properties.Group>
      </div>
    </S.Container>
  );
}

export default BackgroundProperties;
