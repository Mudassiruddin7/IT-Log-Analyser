const LogFileStorage = artifacts.require("LogFileStorage");

contract("LogFileStorage", (accounts) => {
  it("should assert true", async () => {
    const instance = await LogFileStorage.deployed();
    assert.isTrue(true);
  });
});
