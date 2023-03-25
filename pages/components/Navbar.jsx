import Link from "next/link";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
