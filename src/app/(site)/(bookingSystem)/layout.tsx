import "../globals.css";

export default async function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto max-w-[1440px]">{children}</main>;
}
