export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Explore, Develop, Grow, Excel`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} s VIT Pune's Annual Student Summit.
A transformative platform offering students a unique opportunity to gain practical insights from industry mentors.`,
  image = "/thumbnail.jpg",
  icons = [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
  noIndex = false,
} = {}) => ({
  title,
  description,
  icons,
  openGraph: {
    title,
    description,
    ...(image && { images: [{ url: image }] }),
  },
  twitter: {
    title,
    description,
    ...(image && { card: "summary_large_image", images: [image] }),
    creator: "@sohamkolhatkar",
  },
  ...(noIndex && { robots: { index: false, follow: false } }),
});
