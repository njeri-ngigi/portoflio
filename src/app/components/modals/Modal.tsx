import { IoCloseSharp } from "react-icons/io5";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type InnerModalProps = {
  children: React.ReactNode;
} & ModalProps;

export function Modal(props: InnerModalProps) {
  if (!props.open) {
    return null;
  }

  return (
    <div className="fixed h-full w-full flex items-center justify-center">
      <div
        className="fixed bg-black opacity-70 h-full w-full flex items-center justify-center"
        onClick={props.onClose}
      ></div>
      <div className="fixed text-4xl bg-white p-8 pl-10 h-[70vh] w-3/5">
        <div className="w-full flex justify-between">
          <div>.....</div>
          <button onClick={props.onClose}>
            <IoCloseSharp size={30} />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}
