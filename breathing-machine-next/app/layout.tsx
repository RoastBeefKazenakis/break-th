import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini-Golf Breathing — 3D",
  description:
    "A 3D Rube Goldberg breathing machine — fifteen isometric dioramas, one breath per station. Inhale, exhale, follow the ball.",
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
