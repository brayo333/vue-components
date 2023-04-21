import Button from "../../components/Button.vue";

describe("Testing the button component", () => {
  it("Has the correct background color which was passed as a prop", () => {
    cy.mount(Button, {
      props: {
        id: "button",
        backgroundColor: "rgb(248, 66, 1)",
        label: "Hello there",
        color: "white",
        option: "rounded",
      },
    });

    cy.get('[id="button"]').should(
      "have.css",
      "background-color",
      "rgb(248, 66, 1)"
    );
  });
});
