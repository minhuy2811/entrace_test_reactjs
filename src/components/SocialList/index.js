import "../../styles.css";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { Button } from "reactstrap";

export default function SocialList() {
  const socialList = [
    { icon: AiFillFacebook, className: "social_fb" },
    { icon: AiFillTwitterCircle, className: "social_twitter" },
    { icon: AiOutlineMail, color: "danger" },
    { icon: AiOutlineGithub, color: "dark" },
  ];
  return (
    <div className="social_form">
      {socialList.map((item, index) => {
        const key = index;
        return (
          <Button
            key={key}
            size="sm"
            className={item.className}
            color={item.color}
          >
            <item.icon />
          </Button>
        );
      })}
    </div>
  );
}
