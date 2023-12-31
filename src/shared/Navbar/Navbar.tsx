import logoIcon from '@images/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button/Button';
export const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={logoIcon}
            alt="logo"
            width={148}
            height={50}
            className="object-contain"
          />
        </Link>
        <Button
          title="Sign in"
          type="button"
          isDisabled={false}
          classStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          direction="titleFirst"
        />
      </nav>
    </header>
  );
};
