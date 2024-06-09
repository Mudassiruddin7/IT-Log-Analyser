// ipfs.js

const IPFS = require('ipfs-http-client');
const ipfs = IPFS.create();

const addFileToIPFS = async (path, base64Content) => {
  const file = {
    path: path,
    content: Buffer.from(base64Content, 'base64')
  };
  
  const { cid } = await ipfs.add(file);
  return cid.toString();
};

const addFilesToIPFS = async (arrayOfPathAndBase64Content) => {
  const files = arrayOfPathAndBase64Content.map(item => ({
    path: item.path,
    content: Buffer.from(item.content, 'base64')
  }));

  const cids = [];
  for await (const result of ipfs.addAll(files)) {
    cids.push({ path: result.path, cid: result.cid.toString() });
  }

  return cids;
};

module.exports = { addFileToIPFS, addFilesToIPFS };
