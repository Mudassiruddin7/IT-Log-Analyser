const MyToken = artifacts.require("logFileStorage");

module.exports = function(deployer) {

    deployer.deploy(MyToken);
}