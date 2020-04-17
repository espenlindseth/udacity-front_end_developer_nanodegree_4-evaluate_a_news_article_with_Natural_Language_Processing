import { validUrl } from "../client/js/validUrl";

test("validUrl function should return true if a URL is passed", () => {
    expect(validUrl("http://google.com")).toBeTruthy();
});

test("validUrl function should return false if a non-URL string is passed", () => {
    expect(validUrl("I've got a bike, you can ride it if you like!")).toBeFalsy();
});
