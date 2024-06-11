import { ContactButton } from "../../components";
import { Title } from "./Title";
import { Actions } from "./Actions";

type MainProps = {
  onOpenContactModal: () => void;
};

export function Main(props: MainProps) {
  return (
    <div className="flex flex-col font-jura justify-evenly items-center w-4/5 lg:w-full">
      <Title />
      <Actions />
      <ContactButton onClick={props.onOpenContactModal} />
    </div>
  );
}
