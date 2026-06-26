import React from "react";

const PageHeader = ({ items }) => {
  return (
    <div className="w-full h-[52px] bg-[#069EDC] flex items-center gap-4 px-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.label || "icon"}
              className="w-6 h-6"
            />

            {item.label && (
              <span className="text-white text-sm">{item.label}</span>
            )}
          </div>

          {items.length > 1 && index !== items.length - 1 && (
            <img
              src="/cheveron-down.svg"
              alt="chevron-right"
              className="w-5 h-5 -rotate-90 opacity-90"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageHeader;