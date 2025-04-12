import React from "react";

export default function Menus({
  projects = [], // Add default empty array
  activeProject = 0,
  setActiveProject = () => {}, // Add default no-op function
}) {
  // Default menu items to use if no projects are provided
  const defaultMenuItems = [
    { title: "学习", icon: "🏠" },
    { title: "特别任务", icon: "🎯" },
    { title: "宝石小店", icon: "🏪" },
    { title: "个人档案", icon: "👤" },
    { title: "更多", icon: "•••" },
  ];

  // Use provided projects or fallback to default items
  const menuItems = projects.length > 0 ? projects : defaultMenuItems;

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
            className={`flex items-center py-0 px-3 rounded-xl transition-colors ${
              index === activeProject
                ? "bg-[#ddf4ff] border-2 border-[#84d8ff]"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center mr-2">
              {typeof item.icon === "string" && (
                <div
                  className={`text-2xl rounded-lg flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              )}
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
