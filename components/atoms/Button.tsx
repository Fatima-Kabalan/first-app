type ButtonProps = {
  text: string,
  onClick: () => void,
}

export default function Button({text, onClick}: ButtonProps) {

  return <button className="bg-black text-white" onClick={onClick}>{text}</button>;
}


