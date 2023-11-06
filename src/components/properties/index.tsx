import Property from "./Property";
import PropertyGroup from "./PropertyGroup";
import ToggleControl from "./controls/ToggleControl";
import SliderControl from "./controls/SliderControl";
import ColorControl from "./controls/ColorControl";
import SelectControl from "./controls/SelectControl";
import CoordControl from "./controls/CoordControl";
import ColorSliderControl from "./controls/ColorSliderControl";
import GridProperty from "./GridProperty";
import ImageButtonControl from "./controls/ImageButtonControl";
import ImageBoxControl from "./controls/ImageBoxControl";

function Properties() {}

Properties.Group = PropertyGroup;
Properties.Property = Property;
Properties.GridProperty = GridProperty;
Properties.ToggleControl = ToggleControl;
Properties.SliderControl = SliderControl;
Properties.ColorSliderControl = ColorSliderControl;
Properties.ImageButtonControl = ImageButtonControl;
Properties.ColorControl = ColorControl;
Properties.SelectControl = SelectControl;
Properties.CoordControl = CoordControl;
Properties.ImageBoxControl = ImageBoxControl;

export default Properties;
