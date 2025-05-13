import React from "react";

export default function Menus({
  projects = [],
  activeProject = 0,
  setActiveProject = () => {},
  isLoading = false, // Add isLoading prop
}) {
  const menuItems = projects;

  return (
    <div className="w-64 px-4 bg-white shadow-lg h-screen flex flex-col fixed left-0 top-0 bottom-0 border-r-gray-200 border-r-2">
      {/* Logo area */}
      <div className="p-4 mb-2">
        <h1 className="text-3xl font-bold text-green-500">CV Projects</h1>
      </div>

      {/* Menu items */}
      <div className="flex flex-col gap-2 px-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(index)}
            disabled={isLoading} // Disable button when loading
            className={`flex items-center py-0 px-3 rounded-xl transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : '' // Add styles for disabled state
            } ${
              index === activeProject
                ? "bg-[#ddf4ff] border-2 border-[#84d8ff]"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center mr-2">
              <img src={item.icon} alt="" className="w-1/2 h-1/2" />
            </div>
            <span className="text-gray-700">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Helper function to generate background colors for icons
// function getIconBgColor(index) {
//   const colors = [
//     "bg-blue-100",
//     "bg-yellow-100",
//     "bg-red-100",
//     "bg-purple-100",
//     "bg-green-100",
//   ];
//   return colors[index % colors.length];
// }
