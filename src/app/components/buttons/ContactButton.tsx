type ContactButtonProps = {
  onClick: () => void;
};

export function ContactButton(props: ContactButtonProps) {
  return (
    <div className="text-4xl">
      <button
        className="absolute border-2 border-black p-4 bg-cream bottom-2.5 hover:bg-white transition-all duration-300 active:bottom-0 active:ml-2.5"
        onClick={props.onClick}
      >
        CONTACT ME
      </button>
      <div className="border-2 border-black p-4 ml-2.5 bg-lemon">
        <span className="text-lemon">CONTACT ME</span>
      </div>
    </div>
  );
}
