import Input from "../components/Input.vue";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    option: {
      control: { type: "select" },
      options: ["rounded", "slightlyRounded", "box", "line"],
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Rounded = Template.bind({});
Rounded.args = {
  type: "text",
  option: "rounded",
  backgroundColor: "#f5f5f6",
  placeholder: "Hello there",
  style: "width:50%;",
};
export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  type: "text",
  option: "slightlyRounded",
  backgroundColor: "#f5f5f6",
  placeholder: "Hello there",
  style: "width:50%;",
};
export const Box = Template.bind({});
Box.args = {
  type: "text",
  option: "box",
  backgroundColor: "#f5f5f6",
  placeholder: "Hello there",
  style: "width:50%;",
};
export const Line = Template.bind({});
Line.args = {
  type: "text",
  option: "line",
  backgroundColor: "transparent",
  placeholder: "Hello there",
  style: "width:50%;",
  "box-shadow": "0px 1px 0px #db382a",
};
export const SlightlyRoundedBorder = Template.bind({});
SlightlyRoundedBorder.args = {
  type: "text",
  option: "slightlyRounded",
  border: "1px solid #000000",
  backgroundColor: "transparent",
  placeholder: "Search",
  style: "width:50%;",
};
