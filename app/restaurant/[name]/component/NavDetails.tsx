import Link from "next/link";

function NavDetails() {
  return (
    <nav className=" border-b w-full text-base pb-3 items-end">
      <ul className="flex font-medium">
        <li className="ml-2  mr-7 hover:text-[#da3743]">
          <Link href="/restaurant/hard-rock-cafe">Overview</Link>
        </li>
        <li role="button" className="mr-7 hover:text-[#da3743]">
          Photos
        </li>
        <li className="mr-7 hover:text-[#da3743]">
          <Link href="/restaurant/hard-rock-cafe/menu">Menu</Link>
        </li>
        <li role="button" className="mr-7 hover:text-[#da3743]">
          Reviews
        </li>
      </ul>
    </nav>
  );
}

export default NavDetails;
