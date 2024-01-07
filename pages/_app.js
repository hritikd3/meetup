// _app.js
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "../components/ThemeWrapper";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div className="theme-root">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
