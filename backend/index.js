// index.js

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const web3 = require("./web3-methods");
const { addFileToIPFS } = require("./ipfs");

dotenv.config({ path: "./.env" });

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json());

web3.initializeWeb3();

app.get("/", async (req, res) => {
  res.json({ message: "Success" });
});

app.use("/client", require("./routes/client"));
app.use("/admin", require("./routes/admin"));

const filePath = path.join(__dirname, 'localLogDatabase', 'Bangalore.txt');

app.get("/your-endpoint", async (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const data = fs.readFileSync(filePath, 'utf8');
    const base64Content = Buffer.from(data).toString('base64');

    // Upload file to IPFS
    const ipfsResponse = await addFileToIPFS('Bangalore.txt', base64Content);

    // Sending IPFS response as a response
    res.send({ message: 'File added to IPFS', result: ipfsResponse });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error processing the file", error: error.message });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
