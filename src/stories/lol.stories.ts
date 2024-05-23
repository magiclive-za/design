import type { Meta, StoryObj } from "@storybook/react";
import { Card2 } from "../components/card2";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: Card2,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card2>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args:https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Card2 Title",
    description: "This is a card",
  },
};
