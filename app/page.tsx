"use client"

import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about')
  }
  return (
    <div>
      <h1> home</h1>
     
      <Button text={"take me to about"} onClick={handleClick}/>
    </div>
   
  );
}
