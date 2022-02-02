import React, { useState, useEffect } from "react";
import logo_small from "./images/paktolus_logo.png";
import { Space, Image } from "antd";
import avatar from "./images/avatar.png";
import Login from "./Login";

export default function Navbar({ islogin, setLogin, price, setUser, user }) {
  const [is_visible_login_model, setVisibleLoginModel] = useState(false);
  const [is_create_new_account, setCreateNewAccount] = useState(false);
  const [state, setstate] = useState({
    islogin: false,
    price: "",
  });

  useEffect(() => {
    setstate((preval) => {
      return {
        islogin: islogin,
        price: price,
      };
    });
  }, [islogin, price, user]);

  return (
    <div>
      <nav
        class="navbar navbar-dark  alert-primary"
      
        style={{
          backgroundImage: "linear-gradient(to right,green,lightgreen , green)",
        }}
      >
        <div class="container-fluid justify-content-between">
          <Space>
            {" "}
            <img
              src={logo_small}
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-center rounded rounded-2 ant-card-hoverable"
            />
            <h4 className="p-0 m-0 text-black">
              {user.name ? user.name : "Paktolus"}
            </h4>
          </Space>

          <Space>
            {state.islogin ? (
              <>
                <span>
                  <h3 style={{ color: "greenyellow" }}>
                    ${user.price || "00.00"}
                  </h3>
                </span>
                <Image
                  width={50}
                  height={50}
                  src={avatar}
                  className="m-0 p-0"
                />
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    setLogin(false);
                    setUser({
                      name: "",
                      price: "",
                    });
                  }}
                >
                  <h4 className="m-0 text-white">
                    <Space align="center">
              
                      Logout
                    </Space>
                  </h4>
                </button>
              </>
            ) : (
              <Space>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    setVisibleLoginModel(!is_visible_login_model);
                    setCreateNewAccount(false);
                  }}
                >
                  <h4 className="m-0 text-black">
               
                    Login
                  </h4>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    setVisibleLoginModel(!is_visible_login_model);
                    setCreateNewAccount(true);
                  }}
                >
                  <h4 className="m-0 text-black">
                    
                    Registred
                  </h4>
                </button>
              </Space>
            )}
          </Space>

          {is_visible_login_model && (
            <Login
              setVisibleLoginModel={setVisibleLoginModel}
              setLogin={setLogin}
              setUser={setUser}
              is_create_new_account={is_create_new_account}
              setCreateNewAccount={setCreateNewAccount}
            />
          )}
        </div>
      </nav>
    </div>
  );
}
