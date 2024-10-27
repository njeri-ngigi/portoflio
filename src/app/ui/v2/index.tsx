import { About } from "./About";
import { Work } from "./Work";

export function HomeV2() {
  return (
    <div className="flex flex-row p-8 xxs:p-6 lg:flex-col">
      <About />
      <Work />
    </div>
  );
}
