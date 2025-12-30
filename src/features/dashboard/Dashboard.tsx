import Stack from "@mui/material/Stack";
import { component } from "signalium/react";
import { mode } from "@/app-state";
import { unitStates } from "./dashboard-state";
import BrokenToolbar from "./toolbar/BrokenToolbar";
import Toolbar from "./toolbar/Toolbar";
import { sortDirection } from "./toolbar/toolbar-state";
import UnitPanel from "./unit-summary/UnitPanel";

function Dashboard() {
    console.log(sortDirection.value); // this is needed even though the unitStates reactive function depends on sortDirection.value
    const items = unitStates().map(x => <UnitPanel key={x.code} state={x} />);
    return (
        <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            {getToolbar()}
            {items}
        </Stack>
    );

    function getToolbar() {
        switch (mode) {
            case "Everything Works":
                return <Toolbar />;
            case "Sort Menu Bug":
                return <BrokenToolbar />;
            case "Dashboard Bug":
                return <Toolbar />;
        }
    }
}

export default component(Dashboard);
