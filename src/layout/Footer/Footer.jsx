import React from "react";
import "./Footer.scss";

export const Footer = () => {
  const data = new Date().getFullYear();
  return (
    <>
      <footer className=" text-center _footer">
        <div className="text-center _footer_item">
          © {data} Copyright:
          <a
            className="text-white p-1"
            href="https://github.com/AliaksanderPush?tab=repositories"
          >
            {" "}
            My Repo
          </a>
        </div>
      </footer>
    </>
  );
};
