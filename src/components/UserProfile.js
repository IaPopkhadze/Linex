import React, { useEffect, useState, useRef } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
const UserProfile = () => {
  const myRef = useRef();
  const navigate = useNavigate();
  const [userBalance, setUserBalacer] = useState(100.6);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isError, setIsError] = useState(false);
  const [checkall, setCheckAll] = useState(false);
  const [percels, setPercels] = useState([
    {
      id: "TKDS$434523",
      weight: "3 კგ",
      location: " თბილისის ოფისი",
      price: 23,
      status: "გადასახდელია",
      checked: false,
      request: false,
    },
    {
      id: "TKDS$4345238",
      weight: "3 კგ",
      location: " თბილისის ოფისი",
      price: 23,
      status: "გადასახდელია",
      checked: false,
      request: false,
    },
    {
      id: "TKDS$4345237",
      weight: "3 კგ",
      location: " თბილისის ოფისი",
      price: 23,
      status: "გადასახდელია",
      checked: false,
      request: false,
    },
    {
      id: "TKDS$4341524",
      weight: "46 კგ",
      location: " ზესტაფონის ოფისი",
      price: 343,
      status: "გადასახდელია",
      checked: false,
      request: false,
    },
    {
      id: "TKDS$434525",
      weight: "3 კგ",
      location: " ბათუმის ოფისი",
      price: 34,
      status: "გადასახდელია",
      checked: false,
      request: false,
    },
    {
      id: "TKDS$434526",
      weight: "323 კგ",
      location: " რუსთავის ოფისი",
      price: 57,
      status: "გადასახდელია",
      checked: false,
      request: false,
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

  const handleCheck = (id, e) => {
    const checkedItem = percels.map((element) =>
      element.id === id ? { ...element, checked: e } : element
    );
    setPercels(checkedItem);
  };

  const handleRecieve = () => {
    const recivedItems = percels.map((element) =>
      element.checked ? { ...element, request: true } : element
    );

    const saveBoolean = recivedItems.some((x) => x.request === true);
    if (saveBoolean) myRef.current.style.opacity = "1";

    setPercels(recivedItems);
  };

  const handleCheckAll = (e) => {
    const checkAllItem = percels.map((element) => {
      if (checkall && element.status === "გადახდილია") {
        return {
          ...element,
          checked: false,
        };
      } else if (!checkall && element.status === "გადახდილია") {
        return {
          ...element,
          checked: true,
        };
      } else {
        return element;
      }
    });
    setCheckAll(e);
    setPercels(checkAllItem);
  };

  useEffect(() => {
    const selectedItem = percels
      .filter((x) => x.status === "გადახდილია")
      .every((element) => element.checked);
    if (
      selectedItem &&
      percels.filter((x) => x.status === "გადახდილია").length > 0
    ) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
    console.log(selectedItem, percels);
  }, [percels]);

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

      {percels.some((item) => item.status === "გადახდილია") ? (
        <div className="table1_container">
          <div className="table1">
            <div className="table1_header grid4">
              <div className="table1_child">
                <input
                  type="checkbox"
                  checked={checkall}
                  onChange={(e) => handleCheckAll(e.target.checked)}
                  style={{ cursor: "pointer", marginRight: "0.4rem" }}
                />
              </div>
              <div className="table1_child">მისაღები ამანათები</div>
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
                      style={
                        element.request
                          ? { backgroundColor: "#92bd82" }
                          : {
                              backgroundColor:
                                i % 2 ? "var(--color4)" : "var(--color5)",
                            }
                      }
                    >
                      <div
                        className="info_child"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {element.request ? (
                          <BsCheckLg
                            style={{
                              color: "green",
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                              marginLeft: "0.5rem",
                            }}
                          />
                        ) : (
                          <input
                            checked={element.checked}
                            type="checkbox"
                            onChange={(e) =>
                              handleCheck(element.id, e.target.checked)
                            }
                            style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                          />
                        )}
                      </div>
                      <div className="info_child text_center">{element.id}</div>
                      <div className="info_child text_center">
                        {element.weight}
                      </div>
                      <div className="info_child text_center">
                        {element.location}
                      </div>
                      <div
                        className="info_child text_center"
                        style={{ color: "#00aa55", fontWeight: "bold" }}
                      >
                        {element.request
                          ? "მოთხოვნა მიღებულია"
                          : element.status}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="recieve_btn_container">
            <div ref={myRef} className="recieved_request">
              მოთხოვნა მიღებულია, გთხოვთ დაელოდეთ !
            </div>
            <button className="recieve_btn" onClick={handleRecieve}>
              მიღება
            </button>
          </div>
        </div>
      ) : null}

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
