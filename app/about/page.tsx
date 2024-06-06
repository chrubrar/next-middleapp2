import React from "react";
import Link from "next/link";

interface Props {}

const about = () => {
  return (
    <>
      <div>
        <h2>About us</h2>
      </div>
      <div>
        <Link href="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default about;
