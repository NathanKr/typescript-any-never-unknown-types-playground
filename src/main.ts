import { anySamples } from "./lib/any-samples";
import { neverSamples } from "./lib/never-samples";
import { unknownSamples } from "./lib/unknown-samples";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h3>TypeScript types : any vs never vs unknown</h3>
    <p>click the button and check the console</p>
    <button>never samples</button>
    <button>any samples</button>
    <button>unknown samples</button>
  </div>

`;

const buttons = document.body.querySelectorAll("button");
buttons[0]!.addEventListener("click", neverSamples);
buttons[1]!.addEventListener("click", anySamples);
buttons[2]!.addEventListener("click", unknownSamples);
