import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
//Internal Components
import LanguageToggle from '@/components/LanguageToggle';

interface IMenu {
  id: string;
  displayName: string;
  link: string;
}

interface ILogo {
  desktop: string;
  mobile: string;
  alt: string;
}

export interface INavBar {
  logo: ILogo;
  menuItems: IMenu[];
  bgColor: string;
  textColor?: string;
}

const NavBar = ({ logo, menuItems, bgColor, textColor = 'white' }: INavBar) => {
  return (
    <Disclosure as="nav" className={`bg-${bgColor}`}>
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src={logo.mobile}
                    alt={logo.alt}
                    loading="lazy"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src={logo.desktop}
                    alt={logo.alt}
                    loading="lazy"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4"></div>
                </div>
              </div>
              <div className="sm:ml-6 sm:block">
                {/* Right Menuj */}
                <LanguageToggle textColor={textColor} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1"></div>
            <div className="p-4 border-t border-gray-700">
              {/* Right Menu */}
              <LanguageToggle textColor={textColor} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
