import React from "react";
import UserMenu from "../components/UserMenu";
import { IoClose } from "react-icons/io5";

const UserMenuMobile = () => {
  return (
    <section className="bg-white w-full absolute py-2  lg:hidden">
      <button
        onClick={() => window.history.back()}
        className="text-neutral-800 block w-fit ml-auto  px-3 sm:px-10"
      >
        <IoClose size={25} />
      </button>
      <div className="container mx-auto px-5 pb-8">
        <UserMenu />
      </div>
    </section>
  );
};

export default UserMenuMobile;
