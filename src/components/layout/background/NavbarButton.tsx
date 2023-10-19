import Link from "next/link";
import ClientIcon from "../../general/ClientIcon";

export const NavbarButton = ({ title, url, icon, className }: { title: string, url?: string, icon?: string, className?: string }) => {
  return (
    <Link href={url ? url : ""} className={`flex items-center gap-2.5 opacity-70 hover:opacity-90 duration-300 outline-none h-fit my-auto ${className}`}>
      <p className="text-[15px] mt-0.5 uppercase tracking-wider">{title}</p>
      {icon && <ClientIcon icon={icon} className="text-2xl" />}
    </Link>
  )
}

export default NavbarButton;