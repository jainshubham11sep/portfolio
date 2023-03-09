import { ThemeProvider } from "@mui/material/styles";
import theme from "../../config/theme";
import Header from "../header";
import Footer from "../footer";

export default function Layout({ children, home }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    );
}