import Stack from "@mui/material/Stack";
import { useAtomValue } from "jotai";
import { unitStatesAtom } from "./dashboard-state";
import Toolbar from "./toolbar/Toolbar";
import UnitPanel from "./unit-summary/UnitPanel";

export default function Dashboard() {
    const unitStates = useAtomValue(unitStatesAtom);
    const items = unitStates.map(x => <UnitPanel key={x.code} state={x} />);
    return (
        <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            <Toolbar />
            {items}
        </Stack>
    );
}
