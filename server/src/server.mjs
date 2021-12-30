import githubTrends from "./main.mjs";
import express from "express";
import cors from "cors";

const fetchData = (section) => async (req, res) => {
  try {
    const result = await githubTrends({ section: section });
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const app = express();
const port = 8099;

app.use(cors());

app.get("/api/developers", fetchData("developers"));
app.get("/api/repositories", fetchData());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
