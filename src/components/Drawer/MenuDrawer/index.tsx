import React from "react";

function MenuDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div>
      MenuDrawer
      <button onClick={onClose}>x</button>
    </div>
  );
}

export default MenuDrawer;
