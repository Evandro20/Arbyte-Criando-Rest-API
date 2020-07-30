const userService = require("../../src/services/users");

let repositoryMock;
beforeEach(() => {
    repositoryMock = { getById: jest.fn().resolves({ id: 1 }) };
});

describe("services", () => {
    describe("users", () => {
        describe("getById", () => {
            test("Should return user if found", async () => {
                const user = await userService.getById(1, repositoryMock);
                expect(user).toBeDefined();
            });
        });
    });
});