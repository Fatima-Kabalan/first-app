"use client"

export default function Button() {
  const handleClick = () => {
    console.log("hello");
  };

  return <button className="bg-black text-white" onClick={handleClick}>Click me</button>;
}


