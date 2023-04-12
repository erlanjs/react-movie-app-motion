import PropTypes from "prop-types";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

function Popup({ children, ref, setClose, minW = "300px", maxW = "auto" }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div
          className="relative w-auto my-6 mx-auto max-w-3xl bg-white p-3 rounded-md "
          style={{ minWidth: minW, maxWidth: maxW }}
          ref={ref}
        >
          <div
            className=" hover:bg-gray-200 cursor-pointer top-0  inline absolute right-1 p-[10px] rounded-full"
            onClick={setClose}
          >
            <div className="flex">
              <MDBIcon fas icon="times" />
            </div>
          </div>
          <div className="pt-1">{children} </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

Popup.propTypes = {
  children: PropTypes.any,
  setClose: PropTypes.func,
  isShow: PropTypes.bool,
  ref: PropTypes.any,
};

export default Popup;
