import React, { useEffect } from "react";
import "./Style/style.css";
import { FiDelete } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Pincode = () => {
  const [pincode, setPincode] = useState([]);
  const [keyboard, setKeyboard] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 0 },
    { value: 111 },
    { value: "Clear" },
  ]);

  const [loggedIn, setLoggedIn] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const _loggedIn = localStorage.getItem("loggedIn");
    if (_loggedIn && _loggedIn === "true") {
      navigate("/user");
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handlePincode = (value) => {
    if (value !== "Clear" && value !== 111 && pincode.length < 5) {
      setPincode([...pincode, value]);
    } else if (value === "Clear") {
      setPincode([]);
    } else if (value === 111) {
      setPincode(pincode.slice(0, -1));
    }
  };

  const handleLogin = () => {
    const password = pincode.join("");
    if (password === "12345") {
      localStorage.setItem("loggedIn", true);
      navigate("/user");
    }
  };

  if (loggedIn === false) {
    return (
      <div className="pincode">
        <div className="pincode_container">
          <div className="output_container">
            {Array.from({ length: 5 }, (v, i) => {
              return (
                <div key={i} className="output_box">
                  {pincode[i]}
                </div>
              );
            })}
          </div>
          <div className="keyboard_container">
            {keyboard.map((element, index) => {
              return (
                <div
                  key={index}
                  className="each_number"
                  onClick={() => handlePincode(element.value)}
                >
                  {element.value === 111 ? <FiDelete /> : element.value}
                </div>
              );
            })}
          </div>
          <div className="btn_container">
            <button className="enter_btn" onClick={handleLogin}>
              Enter
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Pincode;
