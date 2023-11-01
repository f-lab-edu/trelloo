import Property from "./Property";
import PropertyGroup from "./PropertyGroup";
import ToggleControl from "./controls/ToggleControl";
import SliderControl from "./controls/SliderControl";
import ImageControl from "./controls/ImageControl";
import ColorControl from "./controls/ColorControl";
import SelectControl from "./controls/SelectControl";
import CoordControl from "./controls/CoordControl";
import PropertyVertical from "./PropertyVertical";

function Properties() {}

Properties.Group = PropertyGroup;
Properties.Property = Property;
Properties.PropertyVertical = PropertyVertical;
Properties.ToggleControl = ToggleControl;
Properties.SliderControl = SliderControl;
Properties.ImageControl = ImageControl;
Properties.ColorControl = ColorControl;
Properties.SelectControl = SelectControl;
Properties.CoordControl = CoordControl;

export default Properties;
