const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-6 font-bold text-2xl border-b border-gray-700">
        Admin "X"
        
      </div>
      <ul className="mt-6">
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">App</li>
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Basic UI elements</li>
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Profile</li>
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Settings</li>
        <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Logout</li>
      </ul>
    </div>
  )
}

export default Sidebar