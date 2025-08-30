import "./globals.css";
import ReduxProvider from "./redux-provider";
// app/layout.tsx or pages/_app.tsx
import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"], // Specify the necessary subsets
  display: "swap", // Recommended for better performance
});
export const metadata = {
  title: "LAMARE Dashboard",
  description: "Healthcare Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
