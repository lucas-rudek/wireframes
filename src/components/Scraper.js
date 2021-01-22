import axios from "axios";
import cheerio from "cheerio";

export default async function Scraper() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3a31a881817a041a63eac1c1bbbba705";

  const teste = await axios.get(url);
  console.log(teste);
}
