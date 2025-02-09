export const PLANS = [
  {
    name: "Free",
    info: "For most individuals",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      { text: "Shorten links" },
      { text: "Up to 100 tags", limit: "100 tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "1K clicks/month" },
      {
        text: "Community support",
        tooltip: "Get answers your questions on discord",
      },
      {
        text: "AI powered suggestions",
        tooltip: "Get up to 100 AI powered suggestions",
      },
    ],
    btn: {
      text: "Register Now",
      href: "https://learner.vierp.in",
      variant: "default",
    },
  },
  {
    name: "Pro",
    info: "For small businesses",
    price: {
      monthly: 9,
      yearly: Math.round(9 * 12 * (1 - 0.12)),
    },
    features: [
      { text: "Shorten links" },
      { text: "Up to 500 tags", limit: "500 tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "20K clicks/month" },
      { text: "Export click data", tooltip: "Upto 1K links" },
      { text: "Priority support", tooltip: "Get 24/7 chat support" },
      {
        text: "AI powered suggestions",
        tooltip: "Get up to 500 AI powered suggestions",
      },
    ],
    btn: {
      text: "Register Now",
      href: "https://learner.vierp.in",
      variant: "purple",
    },
  },
  {
    name: "Business",
    info: "For large organizations",
    price: {
      monthly: 49,
      yearly: Math.round(49 * 12 * (1 - 0.12)),
    },
    features: [
      { text: "Shorten links" },
      { text: "Unlimited tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "Unlimited clicks" },
      { text: "Export click data", tooltip: "Unlimited clicks" },
      {
        text: "Dedicated manager",
        tooltip: "Get priority support from our team",
      },
      {
        text: "AI powered suggestions",
        tooltip: "Get unlimited AI powered suggestions",
      },
    ],
    btn: {
      text: "Register Now",
      href: "https://learner.vierp.ins",
      variant: "default",
    },
  },
];

export const PRICING_FEATURES = [
  {
    text: "Shorten links",
    tooltip: "Create shortened links",
  },
  {
    text: "Track clicks",
    tooltip: "Track clicks on your links",
  },
  {
    text: "See top countries",
    tooltip: "See top countries where your links are clicked",
  },
  {
    text: "Upto 10 tags",
    tooltip: "Add upto 10 tags to your links",
  },
  {
    text: "Community support",
    tooltip: "Community support is available for free users",
  },
  {
    text: "Priority support",
    tooltip: "Get priority support from our team",
  },
  {
    text: "AI powered suggestions",
    tooltip: "Get AI powered suggestions for your links",
  },
];

export const WORKSPACE_LIMIT = 2;
