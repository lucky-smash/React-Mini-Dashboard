// import { useState } from 'react'
// import Navbar from './components/layout/Navbar'
// import Sidebar from './components/layout/Sidebar'
// import Cards from './components/layout/Cards'
// import BigCards from './components/layout/bigCard'

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

//   return (
//     <>

//       <div className='container  w-100vw'>
//         {/* ✅ SIDEBAR */}
//         <div
//           className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white transition-transform duration-300
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           <Sidebar />
//         </div>
//         <div className="navbar w-full">
//           <Navbar>

//           </Navbar>
//         </div>
//         <div className="grid grid-cols-4 gap-6 p-1 
//         w-full min-h-screen bg-slate-100 ">
//           {/* Top 3 Small Cards */}
//           <Cards />
//           <Cards />
//           <Cards />
//           <Cards />

//           {/* Bottom 2 Big Cards */}
//           <div className="col-span-2">
//             <BigCards />
//           </div>

//           <div className="col-span-2 ">
//             <BigCards />
//           </div>

//         </div>

//       </div>

//     </>
//   )
// }

// export default App



import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Cards from "./components/layout/Cards";
import BigCards from "./components/layout/BigCard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ✅ SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full z-50 w-64 bg-slate-800 text-white transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`} >
        <Sidebar />
      </div>

      {/* ✅ MAIN SECTION */}
      <div
        className={`flex-1 min-h-screen transition-all duration-300
        ${isSidebarOpen ? "ml-64" : "ml-0"}`}
      >
        {/* ✅ NAVBAR */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* ✅ CARDS GRID */}
        <div className="grid grid-cols-4 gap-6 p-6">
  
          <Cards />
          <Cards />
          <Cards />
          <Cards />
   

          <div className="col-span-2">
            <BigCards />
          </div>

          <div className="col-span-2">
            <BigCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
