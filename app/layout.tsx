import "./globals.css";
import { Dosis } from "@next/font/google";
import "react-datepicker/dist/react-datepicker.css";
// components
import NavBar from "./component/navBar";
import AuthContext from "./context/AuthContext";
import { Metadata } from "next";
// fonts
const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase : new URL("https://www.opentable-demo.com"),
  title: {
    default : "OpenTable Demo",
    template : `%s | OpenTable Demo`
  },
  description: "this is a site for restaurant reservation",
  keywords: ['Next.js', 'React', 'JavaScript' , 'Typescript' , 'restaurant_reservation' , 'opentable' , 'restaurants' , 'restaurant' , 'reservation' , 'restaurant_order'],
  creator: 'Iman Giahi',
  publisher: 'Iman Giahi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className={dosis.className}>
          <main className="min-h-screen w-screen bg-gray-300">
            <AuthContext>
              <main className="m-auto  bg-white min-h-screen max-w-screen-xl ">
                <NavBar />
                {children}
              </main>
            </AuthContext>
          </main>
        </main>
      </body>
    </html>
  );
}
