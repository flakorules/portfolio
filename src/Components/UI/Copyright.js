import React from "react";

export const Copyright = () => {
  return (
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Cristian Cisternas {new Date().getFullYear()}</small>
      </div>
    </div>
  );
};
