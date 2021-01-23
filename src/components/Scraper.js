import axios from "axios";
import cheerio from "cheerio";

export default async function Scraper() {
  const url = "https://example.com/";

  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }
  const $ = await fetchHTML(url);
  console.log(`Site HTML: ${$.html()}\n\n`);
}
