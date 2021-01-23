import axios from "axios";

export default async function Scraper() {
  const url =
    "https://api.scraperapi.com/?api_key=69721ee4e521c5738c2d9059e6a15e69&url=https://pr.olx.com.br/regiao-de-ponta-grossa-e-guarapuava/autos-e-pecas/carros-vans-e-utilitarios/bmw-118i-sport-831618601";

  const teste = await axios.get(url);

  console.log(teste.data);
}
