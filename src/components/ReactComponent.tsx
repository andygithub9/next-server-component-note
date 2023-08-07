"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ReactComponent = () => {
  const [data, setData] = useState<number>();
  useEffect(() => {
    setData(Math.random());
  }, []);
  return (
    <div>
      <div>{data}</div>
      <div>
        <Link href="/other">use {"next/link"} to navigate away</Link>
      </div>
      <div>
        <a href="/other">use a tag to navigate away</a>
      </div>
    </div>
  );
};

export default ReactComponent;
