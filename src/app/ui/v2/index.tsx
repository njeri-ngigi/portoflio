import { About } from "./About";
import { Work } from "./Work";

export function HomeV2() {
  return (
    <div className="flex flex-row p-5 xxs:p-6 lg:flex-col lg:h-full h-screen lg:items-center">
      <About />
      <Work />
    </div>
  );
}
