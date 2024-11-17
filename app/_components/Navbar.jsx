import Link from "next/link";

function Navbar() {
  return (
    <header className='bg-primary flex justify-between items-center p-5'>
      <div>
        <img src='/image1.png' className=' h-8' />
      </div>
      <nav>
        <ul className='flex justify-center items-center gap-6 text-white max-lg:hidden'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>Services</Link>
          </li>
          <li>
            <Link href='/'>Whitepaper</Link>
          </li>
          <li>
            <Link href='/'>Team</Link>
          </li>
          <li>
            <Link href='/'>FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className='flex max-md:justify-end gap-8'>
        <Link href='/connectWallet' className=' bg-white py-2 px-8 rounded-xl'>
          Sign In
        </Link>

        <Link href='/' className='bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl max-sm:hidden'>
          Watch Demo
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
