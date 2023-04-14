import { mount } from "@vue/test-utils";
import Button from "../components/Button.vue";

describe("Testing the button component", () => {
  test("Passing props to the button", async () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        label: "Hello there",
      },
    });

    expect(wrapper.text()).toContain("Hello there");
  });
});
