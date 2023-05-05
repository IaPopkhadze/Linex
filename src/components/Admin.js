import React, { useState } from "react";
import "./Style/style.css";
import { GiCheckMark } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { RxDoubleArrowRight } from "react-icons/rx";
const Admin = () => {
  const [temporaryObject, setTemporaryObject] = useState([
    {
      id: "1231dsdk32319",
    },
    {
      id: "23dsewdk32319",
    },
    {
      id: "324433dsdk32319",
    },
    {
      id: "5553dsdk32319",
    },
    {
      id: "434dsdk32319",
    },
  ]);

  return (
    <div className="admin">
      <div className="title">
        გასაცემი ამანათები{" "}
        <RxDoubleArrowRight style={{ marginBottom: "0.4rem" }} /> ოთახი 1123{" "}
      </div>
      <div className="percels_container">
        {temporaryObject.map((item, i) => {
          return (
            <div key={i} className="child_container">
              <div className="left">
                {i + 1}. {item.id}
              </div>
              <div className="btns">
                <button>
                  <GiCheckMark /> მიღება
                </button>
                <button>
                  <FiX style={{ fontSize: "1.3rem" }} /> გაუქმება
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cancel">
        <FiX />
      </div>
    </div>
  );
};

export default Admin;
