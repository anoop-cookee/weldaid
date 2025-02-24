import socialIcon1 from "../assets/social-icon1.svg";
import socialIcon2 from "../assets/social-icon2.svg";
import socialIcon3 from "../assets/social-icon3.svg";

const footerList = [
  {
    name: "Address",
    type: "text",
    list: ["P.O Box-55433,", "Doha - Qatar"],
    flat: false,
  },
  {
    name: "Info",
    type: "text",
    list: ["Home", "About", "Products", "Contact"],
    flat: false,
  },
  {
    name: "Contact us",
    type: "text",
    list: [
      "974 – 44505233",
      "974 – 55670107",
      "974 – 66448086",
      "weldaidtrading@gmail.com",
    ],
    flat: false,
  },
  {
    name: "",
    type: "image",
    list: [socialIcon1, socialIcon2, socialIcon3],
    flat: true,
  },
];

export default footerList;
