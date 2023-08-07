import Link from "next/link";

const ServerComponent = () => {
  return (
    <div>
      <p>{Math.random()}</p>
      <div>
        <Link href="/other">use {"next/link"} to navigate away</Link>
      </div>
      <div>
        <a href="/other">use a tag to navigate away</a>
      </div>
    </div>
  );
};

export default ServerComponent;
