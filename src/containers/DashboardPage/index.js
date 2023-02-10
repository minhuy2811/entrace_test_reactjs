import React, { useState } from "react";
import { Container, Popover } from "reactstrap";
import { AiOutlineLogout } from "react-icons/ai";
import avatar_img from "../../images/avatar_img.png";
import dashboard_img from "../../images/dashboard_img.svg";

export default function DashboardPage() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container fluid="xs">
      <div className="py-3 px-4 d-flex justify-content-end align-items-center text-secondary">
        <div className="px-2">
          <p className="mb-0">John Doe</p>
          <p className="mb-0" style={{ fontSize: "0.875rem" }}>
            Available
          </p>
        </div>
        <div
          className="p-2 rounded-circle bg-dark"
          onClick={handleToggle}
          id="logout"
        >
          <img width="100%" height="100%" alt="avatar" src={avatar_img} />
        </div>
        <Popover placement="bottom-start" isOpen={toggle} target="logout">
          <div className="p-2">
            <a href="/login">
              <span style={{ paddingRight: "8px" }}>
                <AiOutlineLogout />
              </span>
              <span>Logout</span>
            </a>
          </div>
        </Popover>
      </div>
      <div className="bg-light py-5">
        <h3 className="text-center text-secondary">Welcom to Demo App</h3>
        <div style={{ height: "calc(100vh - 84px - 34px)" }}>
          <img alt="dashboard" src={dashboard_img} width="100%" height="100%" />
        </div>
      </div>
    </Container>
  );
}
