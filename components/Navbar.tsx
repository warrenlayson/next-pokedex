import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full">
      <Link href={'/'}>
        <a className="mx-4 text-lg">Home</a>
      </Link>
      <Link href={'/about'}>
        <a className="mx-4 text-lg">About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
