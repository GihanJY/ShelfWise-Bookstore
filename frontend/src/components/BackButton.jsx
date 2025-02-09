import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="text-blue-900 pr-5 rounded-lg w-fit flex items-center"
      >
        <BsArrowLeft className="text-xl" />
      </Link>
    </div>
  );
};

export default BackButton;

