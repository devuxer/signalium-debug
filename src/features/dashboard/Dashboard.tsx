import Stack from "@mui/material/Stack";
import { component } from "signalium/react";
import { mode } from "@/app-state";
import { unitStates } from "./dashboard-state";
import BrokenToolbar from "./toolbar/BrokenToolbar";
import Toolbar from "./toolbar/Toolbar";
import UnitPanel from "./unit-summary/UnitPanel";

function Dashboard() {
    const items = unitStates().map(x => <UnitPanel key={x.code} state={x} />);
    return (
        <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            {getToolbar()}
            {items}
        </Stack>
    );

    function getToolbar() {
        switch (mode) {
            case "Working":
                return <Toolbar />;
            case "Broken":
                return <BrokenToolbar />;
        }
    }
}

export default component(Dashboard);
