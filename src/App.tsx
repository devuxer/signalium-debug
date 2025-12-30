import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { mode } from "./app-state";
import BrokenDashboard from "./features/dashboard/BrokenDashboard";
import Dashboard from "./features/dashboard/Dashboard";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "rgb(73, 108, 151)" },
        secondary: { main: "rgb(255, 255, 255)" },
        success: { main: "rgb(49, 120, 55)" },
        warning: { main: "rgb(245, 200, 17)" },
        error: { main: "rgb(255, 78, 78)" },
        divider: "rgba(255, 255, 255, 0.3)",
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderRadius: "16px",
                    padding: "8px 16px",
                },
            },
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 2 }}>{getDashboard()}</Box>
        </ThemeProvider>
    );

    function getDashboard() {
        switch (mode) {
            case "Working":
                return <Dashboard />;
            case "Broken":
                return <BrokenDashboard />;
        }
    }
}
