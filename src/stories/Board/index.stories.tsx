import { ComponentStory, ComponentMeta } from "@storybook/react";
import Board from "../../components/Board";

export default {
  title: "Board",
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (arg) => <Board {...arg} />;

export const FirstStory = Template.bind({});
FirstStory.args = { boardName: "default" };
