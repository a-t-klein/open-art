import Link from "next/link"

const Navbar = (): React.JSX.Element =>  {
  return (
    <>
      <h1> navbar</h1>
      <ul>
        <li>
          <Link href ="/pages/about">About</Link>
        </li>
      </ul>
      
    </>

  )

}

export default Navbar