import { text } from "stream/consumers";
import { nameCity, valueMoney } from "./Enum";

export const selectNameCity = [
  { text: "New York City", value: nameCity.NewYorkCity },
  { text: "Cape Town, South Africa", value: nameCity.CapeTownSouthAfrica },
  { text: "Berlin, Germany", value: nameCity.BerlinGermany },
  { text: "London, U.K.", value: nameCity.LondonUK },
  { text: "Madrid, Spain", value: nameCity.MadridSpain },
  { text: "Mexico City, Mexico", value: nameCity.MexicoCityMexico },
  { text: "Liverpool, U.K.", value: nameCity.LiverpoolUK },
  { text: "Tokyo, Japan", value: nameCity.TokyoJapan },
  { text: "Rome, Italy", value: nameCity.RomeItaly },
  { text: "Porto, Portugal", value: nameCity.PortoPortugal },
  { text: "Paris, France", value: nameCity.ParisFrance },
  { text: "Mumbai, India", value: nameCity.MumbaiIndia },
  { text: "Lisbon, Portugal", value: nameCity.LisbonPortugal },
  { text: "Chicago", value: nameCity.Chicago },
  { text: "Manchester, U.K.", value: nameCity.ManchesterUK },
  { text: "São Paulo, Brazil", value: nameCity.SaoPauloBrazil },
  { text: "Los Angeles", value: nameCity.LosAngeles },
  { text: "Amsterdam, The Netherlands", value: nameCity.AmsterdamTheNetherlands },
  { text: "Lagos", value: nameCity.Lagos },
  { text: "Melbourne, Australia", value: nameCity.MelbourneAustralia },
];

export const selectValueMoney = [
    { text: "100 - 500", value: valueMoney.namtram},
    { text: "500 - 1000", value: valueMoney.motnghin},
    { text: "1000 - 1500", value: valueMoney.motnghinnamtram},
    { text: "15000 - 20000", value: valueMoney.hainghin},
    { text: "Ocer 2000", value: valueMoney.honhainghin},
]