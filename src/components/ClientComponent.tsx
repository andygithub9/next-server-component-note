"use client";
import Link from "next/link";

const ClientComponent = () => {
  return (
    <div>
      {/* Error: Text content does not match server-rendered HTML. */}
      <div>{Math.random()}</div>
      <div>
        <Link href="/other">use {"next/link"} to navigate away</Link>
      </div>
      <div>
        <a href="/other">use a tag to navigate away</a>
      </div>
    </div>
  );
};

export default ClientComponent;
