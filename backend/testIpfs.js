// testIpfs.js

const { addFileToIPFS, addFilesToIPFS } = require('./ipfs');

(async () => {
  try {
    const singleFileCid = await addFileToIPFS('example.txt', 'SGVsbG8sIFdvcmxkIQ=='); // "Hello, World!" in base64
    console.log('Single file CID:', singleFileCid);

    const files = [
      { path: 'example1.txt', content: 'SGVsbG8sIFdvcmxkIQ==' },
      { path: 'example2.txt', content: 'R29vZGJ5ZSwgV29ybGQh' } // "Goodbye, World!" in base64
    ];
    const multipleFilesCids = await addFilesToIPFS(files);
    console.log('Multiple files CIDs:', multipleFilesCids);
  } catch (error) {
    console.error('Error:', error);
  }
})();
