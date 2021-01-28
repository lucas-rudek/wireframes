import cheerio from "cheerio";
import request from "request";

export default async function Scraper() {
  const url =
    "https://app.scrapingbee.com/api/v1/?api_key=AP91PR5CN47N6B8KRFX51XBWRBMGMRHDONI0BIZX622C8BTG5U5NRDM6L9H9XZTVVYXDO8O5M0ER8TKB&url=https%3A%2F%2Fpr.olx.com.br%2Fregiao-de-ponta-grossa-e-guarapuava%2Fautos-e-pecas%2Fcarros-vans-e-utilitarios&render_js=false";

  request({ url: url }, (err, res, body) => {
    if (err) return console.error(err);
    let $ = cheerio.load(body);

    let title = $("h2.sc-1iuc9a2-1.daMDOK.sc-ifAKCX.eKQLlb")
      .map((i, el) => {
        return $(el).text();
      })
      .get();

    let price = $("p.sc-ifAKCX.eoKYee")
      .map((i, el) => {
        return $(el).text();
      })
      .get();

    let img = $("div.sc-101cdir-2.kBCTPf img")
      .map((i, el) => {
        return $(el).attr("src");
      })
      .get();

    console.log(img);
  });
}
