import Link from "next/link";

const Navbar = (): React.JSX.Element => {
  return (
    <>
      <h1 className="m-9 p-9"> navbar</h1>
      <ul>
        <li>
          <Link href="/home/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
