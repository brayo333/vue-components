import Button from "../components/Button.vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    option: {
      control: { type: "select" },
      options: ["rounded", "slightlyRounded", "box", "circle"],
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

const TemplateWithIcon = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args"><template #icon>${args.icon}</template></Button>`,
});

export const Rounded = Template.bind({});
Rounded.args = {
  option: "rounded",
  label: "Rounded",
  backgroundColor: "#db382a",
  color: "#e9ece6",
};

export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  option: "slightlyRounded",
  label: "Slightly Rounded",
  backgroundColor: "#db382a",
  color: "#e9ece6",
};

export const Box = Template.bind({});
Box.args = {
  option: "box",
  label: "Box",
  backgroundColor: "#db382a",
  color: "#e9ece6",
};

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  option: "rounded",
  hasIcon: true,
  icon: `<iconify-icon
            icon="material-symbols:search"
            height="24"
            color="inherit"
          ></iconify-icon>`,
  label: "Search",
  backgroundColor: "#db382a",
  color: "#e9ece6",
};

export const IconButton = TemplateWithIcon.bind({});
IconButton.args = {
  option: "circle",
  backgroundColor: "#db382a",
  color: "#e9ece6",
  hasIcon: true,
  iconBtn: true,
  icon: `<iconify-icon
            icon="mdi:bell-notification"
            height="24"
            color="inherit"
          ></iconify-icon>`,
};
