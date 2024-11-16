function Navbar() {
  return (
    <header className='bg-primary flex justify-between items-center p-5'>
      <div>
        <img src='/image1.png' className=' h-8' />
      </div>
      <nav>
        <ul className=' flex justify-center items-center gap-4 text-white max-lg:hidden'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Whitepaper</a>
          </li>
          <li>
            <a href='#'>Team</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
        </ul>
      </nav>
      <div className=' flex max-md:justify-end gap-8'>
        <a href='/connectWallet'>
          <button className=' bg-white py-2 px-8 rounded-xl'>Sign In</button>
        </a>
        <button className=' bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl max-sm:hidden'>
          Watch Demo
        </button>
      </div>
    </header>
  );
}

export default Navbar;
