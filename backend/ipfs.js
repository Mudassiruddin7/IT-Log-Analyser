// ipfs.js

const Moralis = require("moralis");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

Moralis.start({
  serverUrl: process.env.MORALIS_SERVER_URL,
  appId: process.env.MORALIS_APP_ID
});

const addFileToIPFS = async (path, base64Content) => {
  const file = new Moralis.File(path, { base64: base64Content });
  const response = await file.saveIPFS();
  return response._ipfsHash;
};

const addFilesToIPFS = async (arrayOfPathAndBase64Content) => {
  const promises = arrayOfPathAndBase64Content.map(async (item) => {
    const file = new Moralis.File(item.path, { base64: item.content });
    const response = await file.saveIPFS();
    return { path: item.path, ipfsHash: response._ipfsHash };
  });
  return Promise.all(promises);
};

module.exports = { addFileToIPFS, addFilesToIPFS };
