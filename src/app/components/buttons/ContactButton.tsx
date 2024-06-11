type ContactButtonProps = {
  onClick: () => void;
};

export function ContactButton(props: ContactButtonProps) {
  return (
    <div className="text-4xl xl:text-3xl flex justify-center">
      <button
        className="absolute border-2 border-black p-4 bg-white hover:bg-cream transition-all duration-300 active:ml-2.5 active:mt-2.5"
        onClick={props.onClick}
      >
        CONTACT ME
      </button>
      <div className="border-2 border-black p-4 ml-4 mt-2.5 bg-lemon">
        <span className="text-lemon">CONTACT ME</span>
      </div>
    </div>
  );
}
