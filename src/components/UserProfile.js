import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userBalance, setUserBalacer] = useState(100.6);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isError, setIsError] = useState(false);
  const [percels, setPercels] = useState([
    {
      id: "TKDS$434523",
      weight: "3 კგ",
      location: " თბილისის ოფისი",
      price: 23,
      status: "გადასახდელია",
    },
    {
      id: "TKDS$434524",
      weight: "46 კგ",
      location: " ზესტაფონის ოფისი",
      price: 343,
      status: "გადასახდელია",
    },
    {
      id: "TKDS$434525",
      weight: "3 კგ",
      location: " ბათუმის ოფისი",
      price: 34,
      status: "გადასახდელია",
    },
    {
      id: "TKDS$434526",
      weight: "323 კგ",
      location: " რუსთავის ოფისი",
      price: 57,
      status: "გადასახდელია",
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  const handleAcceptPay = () => {
    const updated = percels.map((element) =>
      element.id === currentItem.id
        ? { ...element, status: "გადახდილია" }
        : element
    );
    setPercels(updated);
    setUserBalacer(userBalance - currentItem.price);
    setShowOverlay(false);
    setCurrentItem(null);
  };

  const handleClosePay = () => {
    setShowOverlay(false);
    setCurrentItem(null);
  };

  const handlePay = (id, price) => {
    if (userBalance >= price) {
      setShowOverlay(true);
      setCurrentItem({ id: id, price: price });
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <div className="user_profile">
      <div className="user_profile_header">
        <div className="logo">LOGO</div>
        <div className="right_content">
          <div className="right_child">
            <span>ოთახი:</span> 11235
          </div>
          <div className="right_child">
            <span>ბალანსი:</span> {userBalance}
          </div>
        </div>
        <button className="logout" onClick={handleLogout}>
          გასვლა
        </button>
      </div>

      {/* პირველი */}
      <div className="table1">
        <div className="table1_header grid4">
          <div className="table1_child">ამანათები</div>
          <div className="table1_child">წონა</div>
          <div className="table1_child ">მდებარეობა</div>
          <div className="table1_child">სტატუსი</div>
        </div>
        <div className="table_1_info">
          {percels
            .filter((x) => x.status === "გადახდილია")
            .map((element, i) => {
              return (
                <div
                  key={element.id}
                  className="each_info_container grid4"
                  style={{
                    backgroundColor: i % 2 ? "var(--color4)" : "var(--color5)",
                  }}
                >
                  <div className="info_child">{element.id}</div>
                  <div className="info_child text_center">{element.weight}</div>
                  <div className="info_child text_center">{element.location}</div>
                  <div
                    className="info_child text_center"
                    style={{ color: "#00aa55", fontWeight: "bold" }}
                  >
                    {element.status}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div className="table">
        <div className="table_column">
          <div className="header_title">ამანათები</div>
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element) => {
              return <div className="info_child">{element.id}</div>;
            })}
        </div>

        (index===1 ?element.id)
        <div className="table_column">
          <div className="header_title">წონა</div>
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element) => {
              return <div className="info_child">{element.weight}</div>;
            })}
        </div>
        <div className="table_column">
          <div className="header_title">მდებარეობა</div>
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element) => {
              return <div className="info_child">{element.location}</div>;
            })}
        </div>
        <div className="table_column">
          <div className="header_title">სტატუსი</div>
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element) => {
              return <div className="info_child">{element.status} {element.price} ლ</div>;
            })}
        </div>
        <div className="table_column">
          <div className="header_title">მოქმედება</div>
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element) => {
              return (
                <div className="info_child">
                  <button className="info_btn" onClick={() => handlePay(element.id, element.price)}>
                    გადახდა
                  </button>
                </div>
              );
            })}
        </div>
      </div> */}

      <div className="table1">
        <div className="table1_header">
          <div className="table1_child">ამანათები</div>
          <div className="table1_child">წონა</div>
          <div className="table1_child">მისამართი</div>
          <div className="table1_child">გადასახდელი</div>
          <div className="table1_child">გადახდა</div>
        </div>
        <div className="table_1_info">
          {percels
            .filter((x) => x.status !== "გადახდილია")
            .map((element, i) => {
              return (
                <div
                  key={element.id}
                  className="each_info_container"
                  style={{
                    backgroundColor: i % 2 ? "var(--color4)" : "var(--color5)",
                  }}
                >
                  <div className="info_child">{element.id}</div>
                  <div className="info_child text_center">{element.weight}</div>
                  <div className="info_child">{element.location}</div>
                  <div className="info_child text_center">
                    {element.price} ლ
                  </div>
                  <div className="info_child btn_container">
                    <button
                      onClick={() => handlePay(element.id, element.price)}
                    >
                      გადახდა
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {isError && (
        <div className="error_container" onClick={() => setIsError(false)}>
          <div className="error_message">
            თქვენ არ გაქვთ საკმარისი თანხა ანგარიშზე
          </div>
        </div>
      )}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay_container">
            <p>ნამდვილად გსურთ გადახდა? </p>
            <div className="btn_container">
              <button className="yes" onClick={handleAcceptPay}>
                გადახდა
              </button>
              <button className="no" onClick={handleClosePay}>
                უარყოფა
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
