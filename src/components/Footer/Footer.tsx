interface ILogo {
  desktop: string;
  mobile: string;
  alt: string;
}

interface IFooter {
  logo: ILogo;
}

const Footer = ({ logo }: IFooter) => {
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
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
          </div>
          <div>
            <a href="#" className="text-white underline">
              Contact Us
            </a>
          </div>
        </div>
        <div className="py-6 text-center text-white flex-end">
          &copy;&nbsp;2023, All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
