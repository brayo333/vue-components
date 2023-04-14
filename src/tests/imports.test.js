describe("Import vue components", () => {
  test("Importing the button component", async () => {
    const cmp = await import("../components/Button.vue");
    expect(cmp).toBeDefined();
  });
  test("Importing the input component", async () => {
    const cmp = await import("../components/Input.vue");
    expect(cmp).toBeDefined();
  });
});
