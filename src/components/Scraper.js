import axios from "axios";
import cheerio from "cheerio";
import request from "request";

export default async function Scraper() {
  const url =
    "https://app.scrapingbee.com/api/v1/?api_key=AP91PR5CN47N6B8KRFX51XBWRBMGMRHDONI0BIZX622C8BTG5U5NRDM6L9H9XZTVVYXDO8O5M0ER8TKB&url=https%3A%2F%2Fpr.olx.com.br%2Fregiao-de-ponta-grossa-e-guarapuava%2Fautos-e-pecas&render_js=false";

  request(
    {
      method: "GET",
      url: url
    },
    (err, res, body) => {
      if (err) return console.error(err);

      let $ = cheerio.load(body);

      let title = $("title");

      console.log(title.text());
    }
  );
}
