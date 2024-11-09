import { useLocation } from "react-router-dom";
import { navigation } from "../constants";

const LinkUnderline = ({ key, title, href, buttonColor, buttonActive }) => {
  const pathname = useLocation();

  return (
    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.url}
          onClick={handleClick}
          className={`block relative text-2xl text-n-1 transition-colors hover:text-color-1 px-14 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-bold ${
            item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
          } lg:leading-5 lg:hover:text-n-1 lg:px-20 xl:px-32`}
        >
          {item.title}
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-48 -mr-10 bg-blue-500 transition-transform
            duration-300 transform ${
              item.url === pathname.hash ? "scale-x-100" : "scale-x-0"
            }
            group-hover:scale-x-100 origin-left`}
          ></span>
        </a>
      ))}
    </div>
  );
};

export default LinkUnderline;
