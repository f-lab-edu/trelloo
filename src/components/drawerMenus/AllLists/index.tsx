import React from "react";
import Menu from "@components/menuList";
import { TableOutlined, SettingOutlined, UserOutlined, AppstoreOutlined, UngroupOutlined } from "@ant-design/icons";
import { DRAWER_CONTENT, SEARCH_PARAMS_KEY } from "@/constants";
import { useSearchParams } from "react-router-dom";

function AllLists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleContent = (content: string) => {
    searchParams.set(SEARCH_PARAMS_KEY.MENU, content);
    setSearchParams(searchParams);
  };
  return (
    <>
      <Menu.Title>Menu</Menu.Title>
      <Menu.Container>
        <Menu.ListTitle>menu title</Menu.ListTitle>
        <Menu.List>
          <Menu.Button Icon={<AppstoreOutlined />}>About this board</Menu.Button>
          <Menu.Button Icon={<UserOutlined />} onClick={() => handleContent(DRAWER_CONTENT.CHANGE_BACKGROUND)}>
            Change Background
          </Menu.Button>
          <Menu.Button Icon={<SettingOutlined />}>Custom fields</Menu.Button>
          <Menu.Button Icon={<SettingOutlined />}>Stickers</Menu.Button>
          <Menu.Button Icon={<SettingOutlined />}>More</Menu.Button>
        </Menu.List>
      </Menu.Container>

      <Menu.Container>
        <Menu.ListTitle>menu title 2</Menu.ListTitle>
        <Menu.List>
          <Menu.Button Icon={<TableOutlined />}>Stickers</Menu.Button>
          <Menu.Button Icon={<UngroupOutlined />}>Your boards</Menu.Button>
        </Menu.List>
      </Menu.Container>
    </>
  );
}

export default AllLists;
