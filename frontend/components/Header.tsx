import React, { FC } from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/PTRIBnB_logo_white.png';

const Header: FC<{
  heading?: string;
  paragraph?: string;
  linkName: string;
  linkUrl?: string;
}> = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-200 w-200"
          src={img1}
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
