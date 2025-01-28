import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo-white.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-brand-1 backdrop-blur-lg border-b-4 border-brand-2 w-screen shadow-sm h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="container flex justify-center items-center">
          <Link href="/" passhref>
            <a>
              <div className="relative flex items-center text-center">
                <div className="relative h-[5rem] w-[18rem]">
                  <Image src={logo} alt={info.companyName} layout="fill" objectFit="contain"/>
                </div>
                <span className="text-center ft-8 font-semibold text-white !my-auto">Exodus Max</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
