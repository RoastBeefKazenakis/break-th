import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepbreathing.vercel.app"),
  title: "breath/k",
  description:
    "deep breathing: it's good for you",
  openGraph: {
    title: "breath/k",
    description:
      "deep breathing: it's good for you",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 600,
        alt: "Orsetto the bear fishing by a lake, with honey pots he just finished",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "breath/k",
    description:
      "deep breathing, it's good for you",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
