import express from "express";
import axios from "axios";
import cors from "cors";

const riotID = "RGAPI-821b1c03-0aa8-4b1e-95cb-22c283b49185";

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`server on ${port}`);
});

app.get("/puuid", async (req, res) => {
  const nick = req.headers["nick"];
  const tag = req.headers["tag"];

  try {
    const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${nick}/${tag}`;
    console.log(url);
    const response = await axios.get(url, {
      headers: { "X-Riot-Token": riotID },
    });

    console.log(response);
    res.json(response.data.puuid);
  } catch (error) {
    console.error("Błąd podczas pobierania danych API:", error);
    res.status(500).json({ error: "nie udalo sie pobrac danych" });
  }
});
