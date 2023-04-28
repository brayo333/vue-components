import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

describe("Testing the Home component", () => {
  test("Clicking button results in function execution", async () => {
    expect(Home).toBeTruthy();

    const wrapper = mount(Home);
    const paragraph = wrapper.find('[id="test-button"]');
    const button = wrapper.get("[id='button']");

    expect(paragraph.text()).toBe("");
    await button.trigger("click");
    expect(paragraph.text()).toBe("Hello there!");
  });
});
