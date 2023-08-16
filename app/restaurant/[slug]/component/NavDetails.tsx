"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

function NavDetails({ params }: { params: { slug: string } }) {
  const pathname = usePathname()
  return (
    <nav className=" border-b w-full text-base pb-3 items-end">
      <ul className="flex font-medium">
     
        <li className={pathname == `/restaurant/${params.slug}` ? "text-activeColor ml-2 mr-7 " : "ml-2 mr-7 hover:text-[#da3743]"}>
          <Link  href={`restaurant/${params.slug}`}>Overview</Link>
        </li>
        <li className={pathname == `/restaurant/${params.slug}/menu` ? "text-activeColor  mr-7 " : " mr-7 hover:text-[#da3743]"}>
     
          <Link href={`restaurant/${params.slug}/menu`}>Menu</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavDetails;
