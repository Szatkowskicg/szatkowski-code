import myImage2 from "../../assets/images/blanko_trade_2.png";
import Button from "../../components/Button";

const Project2 = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <div className="lg:flex-[3] flex flex-row items-center justify-center gap-2 overflow-hidden">
          <img
            src={myImage2}
            alt="Opis zdjęcia"
            className="h-max w-auto max-lg:hidden"
          />
        </div>

        <div className="flex flex-col lg:flex-[2] items-end justify-end">
          <h1 className="h1 font-bold mb-4">Blanco Trade WebApp</h1>
          <p className="pl-8 text-lg pb-4">
            Is a simple and efficient loyalty program application that allows
            users to earn points by scanning QR codes and redeem them for
            rewards. With separate accounts for users and admins, the app
            ensures seamless management: users collect points, while admins scan
            and add them directly in-store. Everything is handled effortlessly
            using just a smartphone.
          </p>
          <Button
            className="text-xl"
            onClick={(e) => {
              console.log("Button clicked!");
            }}
          >
            Check more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
