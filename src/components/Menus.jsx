import React, { useState } from "react";

export default function Menus({
  projects = [],
  activeProject = 0,
  setActiveProject = () => {},
  isLoading = false,
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuItems = projects;

  return (
    <>
      {/* 移动端右上角三个点按钮 */}
      <button
        className="fixed top-4 right-4 z-[300] md:hidden bg-white rounded-full shadow-lg p-2 border border-gray-200"
        style={{ display: showMobileMenu ? "none" : "block" }}
        onClick={() => setShowMobileMenu(true)}
        aria-label="打开菜单"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
      {/* 菜单抽屉（移动端显示，PC端始终显示） */}
      <div
        className={`w-64 px-4 bg-white shadow-lg h-screen flex flex-col fixed left-0 top-0 bottom-0 border-r-gray-200 border-r-2 z-[250] transition-transform duration-300 md:translate-x-0 md:block ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        } md:relative md:top-0 md:left-0 md:h-screen md:w-64 md:px-4 md:shadow-lg md:flex md:flex-col`}
        style={{ display: showMobileMenu ? "flex" : "none" }}
      >
        {/* 移动端关闭按钮 */}
        <button
          className="absolute top-4 right-4 md:hidden bg-gray-100 rounded-full p-2 border border-gray-200"
          onClick={() => setShowMobileMenu(false)}
          aria-label="关闭菜单"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Logo area */}
        <div className="p-4 mb-2">
          <h1 className="text-3xl font-bold text-green-500">CV Projects</h1>
        </div>
        {/* Menu items */}
        <div className="flex flex-col gap-2 px-2">
          {menuItems.map((item, index) => (
            <button
              onClick={() => {
                setActiveProject(index);
                setShowMobileMenu(false);
              }}
              key={item.title}
              disabled={isLoading}
              className={`flex items-center py-0 px-3 rounded-xl transition-all duration-300 ${
                isLoading
                  ? "opacity-50 cursor-not-allowed filter grayscale"
                  : ""
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
              {isLoading && index === activeProject && (
                <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* PC端菜单始终显示，移动端隐藏 */}
      <div className="w-64 px-4 bg-white shadow-lg h-screen flex flex-col fixed left-0 top-0 bottom-0 border-r-gray-200 border-r-2 z-[250] hidden   md:flex">
        <div className="p-4 mb-2">
          <h1 className="text-3xl font-bold text-green-500">CV Projects</h1>
        </div>
        <div className="flex flex-col gap-2 px-2">
          {menuItems.map((item, index) => (
            <button
              onClick={() => setActiveProject(index)}
              key={item.title}
              disabled={isLoading}
              className={`flex items-center py-0 px-3 rounded-xl transition-all duration-300 ${
                isLoading
                  ? "opacity-50 cursor-not-allowed filter grayscale"
                  : ""
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
              {isLoading && index === activeProject && (
                <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
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
