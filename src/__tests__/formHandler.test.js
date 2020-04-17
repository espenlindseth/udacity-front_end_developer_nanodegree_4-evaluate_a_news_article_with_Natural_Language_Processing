import { handleSubmit } from "../client/js/formHandler";

test("Is this a function?", () => {
    expect(handleSubmit).toBeInstanceOf(Function);
});

// Should add a test to verify the API here.