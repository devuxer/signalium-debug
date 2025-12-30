import Stack from "@mui/material/Stack";
import { component } from "signalium/react";
import { unitStates } from "./dashboard-state";
import Toolbar from "./toolbar/Toolbar";
import UnitPanel from "./unit-summary/UnitPanel";

function BrokenDashboard() {
    const items = unitStates().map(x => <UnitPanel key={x.code} state={x} />);
    return (
        <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            <Toolbar />
            {items}
        </Stack>
    );
}

export default component(BrokenDashboard);
