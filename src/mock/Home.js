import serviceIcon1 from "assets/service-icons/icon_1.svg";
import serviceIcon2 from "assets/service-icons/icon_2.svg";
import serviceIcon3 from "assets/service-icons/icon_3.svg";
import serviceIcon4 from "assets/service-icons/icon_4.svg";
import serviceIcon01 from "assets/service-icons/icon_01.svg";
import serviceIcon02 from "assets/service-icons/icon_02.svg";
import serviceIcon03 from "assets/service-icons/icon_03.svg";
import serviceIcon04 from "assets/service-icons/icon_04.svg";
import serviceIcon5 from "assets/service-icons/icon_5.svg";
import serviceIcon6 from "assets/service-icons/icon_6.svg";
import serviceIcon7 from "assets/service-icons/icon_7.svg";
import serviceIcon8 from "assets/service-icons/icon_8.svg";
import serviceIcon05 from "assets/service-icons/icon_05.svg";
import serviceIcon06 from "assets/service-icons/icon_06.svg";
import serviceIcon07 from "assets/service-icons/icon_07.svg";
import serviceIcon08 from "assets/service-icons/icon_08.svg";

export const BannerData = [
  {
    id: 1,
    heading: "NUBINITY <br/> YOUR WORLD CONNECTED",
    bgImg: require("assets/banner_1.jpg"),
    video: true,
    linkTxt: "SEE SERVICES",
    slug: "/services",
  },
  {
    id: 2,
    heading: "Managed Security Solutions",
    bgImg: require("assets/banner_2.jpg"),
    linkTxt: "View Services",
    slug: "/services",
  },
  {
    id: 3,
    heading: "Reliable and Affordable Web and App Hosting",
    bgImg: require("assets/banner_3.jpg"),
    linkTxt: "Client Area",
    slug: "/services",
  },
];

export const ServicesData = [
  {
    id: 1,
    icon1: serviceIcon1,
    icon2: serviceIcon01,
    heading1: "Managed Endpoint Protection",
    heading2: "Managed SSO",
  },
  {
    id: 2,
    icon1: serviceIcon2,
    icon2: serviceIcon02,
    heading1: "Managed Firewall Services",
    heading2: "Professional Services",
  },
  {
    id: 3,
    icon1: serviceIcon3,
    icon2: serviceIcon03,
    heading1: "Managed Antivirus",
    heading2: "Design Thinking Services",
  },
  {
    id: 4,
    icon1: serviceIcon4,
    icon2: serviceIcon04,
    heading1: "Security Consulting and Pentesting",
    heading2: "Application and Web Design",
  },
  {
    id: 5,
    icon1: serviceIcon5,
    icon2: serviceIcon05,
    heading1: "cPanel Web Hosting",
    heading2: "Reseller Plans",
  },
  {
    id: 6,
    icon1: serviceIcon6,
    icon2: serviceIcon06,
    heading1: "SSL Certificates",
    heading2: "WISP Services",
  },
  {
    id: 7,
    icon1: serviceIcon7,
    icon2: serviceIcon07,
    heading1: "Application Hosting",
    heading2: "Website Builder",
  },
  {
    id: 8,
    icon1: serviceIcon8,
    icon2: serviceIcon08,
    heading1: "Storage, Email and DNS",
    heading2: "Datacenter Services",
  },
];

export const PlansData = [
  {
    id: 1,
    discount: "10%",
    heading: "Managed Endpoint Protection",
    price: "16.99",
    timePeridd: "Per Month",
    slug: "https://clients.nubinity.com",
    details: [
      {
        desc: "Managed Endpoint Protection",
      },
      {
        desc: "16.99 USD / month per endpoint",
      },
      {
        desc: "On-prem appliance available",
      },
      {
        desc: "Advanced threat analytics",
      },
      {
        desc: "Threat Intelligence",
      },
      {
        desc: "Compliance Automation",
      },
      {
        desc: "Single pane of glass monitoring",
      },
      {
        desc: "Managed connectivity and appliances",
      },
    ],
  },
  {
    id: 2,
    discount: "20%",
    heading: "cPanel Hosting",
    price: "9.99",
    timePeridd: "Per Month",
    slug: "https://clients.nubinity.com",
    details: [
      {
        desc: "cPanel Hosting",
      },
      {
        desc: "cPanel Hosting",
      },
      {
        desc: "cPanel Hosting",
      },
      {
        desc: "cPanel Hosting",
      },
      {
        desc: "cPanel Hosting",
      },
    ],
  },
  {
    id: 3,
    discount: "25%",
    heading: "Professional Services",
    price: "98",
    timePeridd: "Per Hour",
    slug: "https://clients.nubinity.com",
    details: [
      {
        desc: "Professional Services",
      },
      {
        desc: "Starting at 98 USD / hr",
      },
      {
        desc: "Discounted rates for managed services",
      },
      {
        desc: "Multi-Discipline Experts ",
      },
      {
        desc: "Security Consulting and Pentesting",
      },
      {
        desc: "Devops and General IT Consulting",
      },
      {
        desc: "Over 20 years of experience ",
      },
      {
        desc: "Intelligent Collaboration Services",
      },
    ],
  },
];

export const TeamData = [
  {
    id: 1,
    img: require("assets/team1.png"),
    name: "Pavel Glukhikh",
    linkedinUrl: "",
    designation: "Chief Executive Officer / Founder",
  },
  {
    id: 2,
    img: require("assets/team2.png"),
    name: "Nicolas Pais",
    linkedinUrl: "",
    designation: "Chief Innovation Officer / Co-Founder",
  },
  {
    id: 3,
    img: require("assets/team3.png"),
    name: "Juan Cortez ",
    linkedinUrl:
      "https://www.linkedin.com/in/juanantoniocortescortes?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&original_referer=",
    designation: "Chief Operations Officer",
  },
  {
    id: 4,
    img: require("assets/team4.png"),
    name: "Joshua Freedman ",
    linkedinUrl:
      "https://www.linkedin.com/in/joshuafreedman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&original_referer=",
    designation: "Chief Technology Officer",
  },
  {
    id: 5,
    img: require("assets/team5.png"),
    name: "Chancellor Boudreaux ",
    linkedinUrl:
      "https://www.linkedin.com/in/chancelor-boudreaux-mba-4b330b85?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    designation: "Chief Financial Officer",
  },
];
