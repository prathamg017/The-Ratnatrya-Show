export const metadata = {
  title: "Gallery | The Ratnatraya Show",
  description: "Visual moments of spiritual confluence and cultural grandeur.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
