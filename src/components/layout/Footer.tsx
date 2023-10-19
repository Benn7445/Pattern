export const Footer = () => {
  return (
    
    <footer className="bg-black text-white w-full flex items-center px-[15%] py-5 mt-auto">
    <div>
      <p className="font-semibold text-white text-opacity-60">© 2023 <span className="text-white">MyServer INC</span></p>
      <p className="text-sm text-white text-opacity-30">All rights reserved. Powered by <span className="text-white text-opacity-50 hover:text-opacity-80 duration-300 cursor-pointer">Pattern</span>.</p>
    </div>
    <div className="flex ml-auto uppercase gap-5 font-semibold text-sm">
      <p className="opacity-30 cursor-pointer hover:opacity-70 duration-300">Privacy Policy</p>
      <p className="opacity-30 cursor-pointer hover:opacity-70 duration-300">Terms Of Policies</p>
    </div>
  </footer>
  )
}

export default Footer;