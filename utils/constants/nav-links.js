import {
  HelpCircleIcon,
  LineChartIcon,
  Link2Icon,
  LockIcon,
  NewspaperIcon,
  QrCodeIcon,
} from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Event",
    href: "#",
    menu: [
      {
        title: "Speakers",
        tagline: "Meet our enigmatic speakers.",
        href: "/speakers",
        icon: NewspaperIcon,
      },
      {
        title: "Workshops",
        tagline: "Get to know about workshops.",
        href: "/workshops",
        icon: HelpCircleIcon,
      },
      {
        title: "Main Events",
        tagline: "Flagship Content.",
        href: "/main-events",
        icon: HelpCircleIcon,
      },
      {
        title: "QR Attendance",
        tagline: "Scan QR codes to mark attendance.",
        href: "/features/qr-codes",
        icon: QrCodeIcon,
      },
    ],
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Sponsors",
    href: "#sponsors",
  },
  {
    title: "About",
    href: "/about",
  },
];
