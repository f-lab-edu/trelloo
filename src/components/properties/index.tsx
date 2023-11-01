import Property from "./Property";
import PropertyGroup from "./PropertyGroup";
import ToggleControl from "./controls/ToggleControl";

function Properties() {}

Properties.Group = PropertyGroup;
Properties.Property = Property;
Properties.ToggleControl = ToggleControl;

export default Properties;
