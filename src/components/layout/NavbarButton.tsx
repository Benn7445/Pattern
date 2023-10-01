import ClientIcon from "../ClientIcon";

export const NavbarButton = ({ title, icon, className }: { title: string, icon?: string, className?: string }) => {
  return (
    <button className={`flex items-center gap-2.5 opacity-70 hover:opacity-90 duration-300 outline-none h-fit my-auto ${className}`}>
      <p className="text-[15px] mt-0.5 uppercase tracking-wider">{title}</p>
      {icon && <ClientIcon icon={icon} className="text-2xl" />}
    </button>
  )
}

export default NavbarButton;