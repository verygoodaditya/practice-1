import Image from "next/image";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div>
      <div className="">
        <h1>Better Desing for your digital products.</h1>
        <p></p>
      </div>

      <div className="">
        <Image src={Hero} alt="" className="w-[300px] has-[300px]:" />
      </div>
    </div>
  );
}
