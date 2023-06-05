import React from "react";
import navbarData from "../pages/api/navbar/navbar.json";

const Navbar = () => {
  const renderButtons = (buttons) => {
    if (!buttons) return null; // Ekstra kontrol ekleyelim

    return buttons.map((button) => {
      if (button.type === "mainButton") {
        return (
          <a
            key={button.title} // Her bir butona unique bir key ekleyelim
            href={button.url}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            {button.title}
          </a>
        );
      } else if (button.type === "parentButton") {
        return (
          <div key={button.title} className="relative group">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              {button.title}
            </button>
            <div className="absolute hidden group-hover:block bg-white w-40 py-2 shadow-md mt-2 rounded">
              {renderButtons(button.children)}
            </div>
          </div>
        );
      } else if (button.type === "childButton") {
        return (
          <a
            key={button.title} // Her bir butona unique bir key ekleyelim
            href={button.url}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            {button.title}
          </a>
        );
      }

      return null; // Ekstra kontrol ekleyelim
    });
  };

  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <div className="flex mr-auto">
          {renderButtons(navbarData.navbar)} {/* navbarData.navbar olarak güncelleyelim */}
        </div>
        <div className="ml-auto">
          <a
            href="/kayit-ol"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Kayıt Ol
          </a>
          <a
            href="/giris-yap"
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Giriş Yap
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
