import Link from "next/link";

function NavDetails({ params }: { params: { slug: string } }) {
  return (
    <nav className=" border-b w-full text-base pb-3 items-end">
      <ul className="flex font-medium">
        <li className="ml-2  mr-7 hover:text-[#da3743]">
          <Link href={`restaurant/${params.slug}`}>Overview</Link>
        </li>

        <li className="mr-7 hover:text-[#da3743]">
          <Link href={`restaurant/${params.slug}/menu`}>Menu</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavDetails;
