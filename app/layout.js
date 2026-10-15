import "./globals.css";

export const metadata = {
  title: "CampusPe | Your next opportunity starts here",
  description: "Find internships, jobs, campus opportunities and your next big step with CampusPe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
