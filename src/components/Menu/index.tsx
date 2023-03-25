import React from "react";
import { Button } from "antd";

interface Props {
  showDrawer: any;
}

function Menu({ showDrawer }: Props) {
  return (
    <div>
      Menu
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
    </div>
  );
}

export default Menu;
