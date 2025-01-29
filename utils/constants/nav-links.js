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
    title: "Features",
    href: "/features",
    menu: [
      {
        title: "Link Shortening",
        tagline: "Shorten links and track their performance.",
        href: "/features/link-shortening",
        icon: Link2Icon,
      },
      {
        title: "Password Protection",
        tagline: "Secure your links with a password.",
        href: "/features/password-protection",
        icon: LockIcon,
      },
      {
        title: "Advanced Analytics",
        tagline: "Gain insights into who is clicking your links.",
        href: "/features/analytics",
        icon: LineChartIcon,
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
    href: "/pricing",
  },
  {
    title: "Enterprise",
    href: "/enterprise",
  },
  {
    title: "Event",
    href: "/",
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
    ],
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
