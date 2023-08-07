import Link from "next/link";

const Navbar = (): React.JSX.Element => {
  return (
    <div className="w-full mb-10 p-3 border-b-2 border-black-500">
      <h1> navbar</h1>
      <ul>
        <li>
          <Link href="/home/about">About</Link>
        </li>
        <li>
          <Link href="/open_art/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

//left side

//logo
//some into stacked

//right side//

// light/dark mode;
// github
// signup
// signin
// contact
// about
