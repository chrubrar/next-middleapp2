import React from "react";
import Link from "next/link";

interface Props {}

const about = () => {
  console.log("hello log");
  return (
    <>
      <div>
        <h2>About us ver 2</h2>
      </div>
      <div>
        <Link href="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default about;
