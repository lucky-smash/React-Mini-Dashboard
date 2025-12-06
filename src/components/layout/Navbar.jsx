// import { FiMenu, FiBell, FiUser } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-white text-black py-2 px-4 w-full">

//   {/* LEFT */}
//   <div className="flex items-center gap-4 hover:cursor-pointer ">
//     <FiMenu />
//     <input
//       type="text"
//       placeholder="Search..."
//       className="p-1 rounded-md border-2 border-gray-300 hover:border-gray-400   "
//     />
//   </div>

//   {/* RIGHT */}
//   <div className="flex items-center gap-6 hover:cursor-pointer">
//     <FiBell />
//     <FiUser />
//   </div>

// </nav>
//   )
// }

// export default Navbar


import { FiMenu, FiBell, FiUser } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow">

      <div className="flex items-center gap-4">
        {/* ✅ HAMBURGER */}
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />

        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-md"
        />
      </div>

      <div className="flex items-center gap-5">
        <FiBell className="text-xl cursor-pointer" />
        <FiUser className="text-xl cursor-pointer" />
      </div>

    </nav>
  );
};

export default Navbar;
