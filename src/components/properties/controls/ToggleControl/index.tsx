import React from "react";
import { Switch } from "@components/ui/switch";

interface Props {
  id: string;
}

function ToggleControl({ id }: Props) {
  return <Switch id={id} />;
}

export default ToggleControl;
