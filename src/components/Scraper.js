import cheerio from "cheerio";
import rp from "request-promise";

export default function Scraper() {
  const url =
    "https://app.scrapingbee.com/api/v1/?api_key=AP91PR5CN47N6B8KRFX51XBWRBMGMRHDONI0BIZX622C8BTG5U5NRDM6L9H9XZTVVYXDO8O5M0ER8TKB&url=https%3A%2F%2Fpr.olx.com.br%2Fregiao-de-ponta-grossa-e-guarapuava%2Fautos-e-pecas%2Fcarros-vans-e-utilitarios&render_js=false";

  rp(url)
    .then((err, response, body) => {
      let $ = cheerio.load(body);
      let res = $("div.fnmrjs-1")
        .map((i, el) => {
          return {
            // somente com o primeiro seletor deve funcionar,
            // deixar assim para garantir
            title: $(el).find("h2.sc-1iuc9a2-1.daMDOK.sc-ifAKCX.eKQLlb").text(),
            price: $(el).find("p.sc-ifAKCX.eoKYee").text(),
            address: $(el)
              .find("span.sc-7l84qu-1.ciykCV.sc-ifAKCX.dpURtf")
              .text(),
            description: $(el)
              .find("span.sc-1j5op1p-0.lnqdIU.sc-ifAKCX.eLPYJb")
              .text(),
            img: $(el).find("div.sc-101cdir-2.kBCTPf img").attr("src"),
            img_noscript: $(el).find("div.sc-101cdir-2 noscript").text()
            //descobrir como iterar por todas paginas
          };
        })
        .get();
      res.map((res) => {
        if (
          res.img ===
          "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        )
          return (res.img = res.img_noscript.slice(10, 69));
      });

      return res;
    })
    .catch(function (err) {
      // Crawling failed or Cheerio choked...
    });
  //ver sobre promisses
}
