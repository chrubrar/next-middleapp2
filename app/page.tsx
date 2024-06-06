import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h2>
          <Link href="/about">Link to about</Link>
        </h2>
      </div>
    </>
  );
}
