// import Mc from "/Mc.png";
// react icon
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="text-2xl text-white flex items-center justify-end my-3 mx-5">
        {/* <div className="flex items-center space-x-3">
          <img src={Mc} alt="Minecraft" width={42} height={42} />
          <p className="text-sm font-bold select-none">Minecraft</p>
        </div> */}
        <div className="text-smalt-blue-500">
          <BsThreeDots />
        </div>
      </div>
    </>
  );
};

export default Navbar;
