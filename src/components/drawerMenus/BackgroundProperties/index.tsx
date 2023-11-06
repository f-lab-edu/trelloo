import React from "react";
import * as S from "./style";
import Menu from "@components/menuList";
import Properties from "@components/properties";
import ImageBoxControl from "@components/properties/controls/ImageBoxControl";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdTexture } from "react-icons/md";

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
            <Properties.ImageButtonControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Tone Mapping">
          <Properties.Property name="Mode">
            {/* TODO: 렌더링 위치 이슈 - drawer 컴포넌트 교체 후 표시 */}
            {/* <Properties.SelectControl /> */}
          </Properties.Property>

          <Properties.Property name="Exposure">
            <Properties.SliderControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Material Property">
          <Properties.Property name="MeshColor">
            <Properties.ColorControl color="lightgray" />
          </Properties.Property>

          <Properties.Property name="Emissive">
            <Properties.ColorSliderControl color="lightgray" />
          </Properties.Property>

          <Properties.Property name="Shininess">
            <Properties.SliderControl />
          </Properties.Property>

          <Properties.Property name="Opacity">
            <Properties.SliderControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Transform">
          <Properties.Property name="Position" appearance={{ isVertical: true }}>
            <Properties.CoordControl />
          </Properties.Property>

          <Properties.Property name="Rotation" appearance={{ isVertical: true }}>
            <Properties.CoordControl />
          </Properties.Property>

          <Properties.Property name="Scale" appearance={{ isVertical: true }}>
            <Properties.CoordControl />
          </Properties.Property>
        </Properties.Group>

        <Properties.Group name="Background" appearance={{ horizontal: true }}>
          <Properties.GridProperty name="Default">
            <ImageBoxControl Icon={IoColorPaletteSharp} />
          </Properties.GridProperty>
          <Properties.GridProperty name="Texture">
            <ImageBoxControl Icon={MdTexture} />
          </Properties.GridProperty>
          <Properties.GridProperty name="Color">
            <ImageBoxControl Icon={IoColorPaletteSharp} />
          </Properties.GridProperty>
        </Properties.Group>
      </div>
    </S.Container>
  );
}

export default BackgroundProperties;
