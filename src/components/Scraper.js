import axios from "axios";

export default async function Scraper() {
  const url =
    "https://pr.olx.com.br/regiao-de-ponta-grossa-e-guarapuava/autos-e-pecas";

  const html = await axios.get(url);
}
