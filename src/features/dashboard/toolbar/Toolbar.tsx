import SortIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ToolbarCore from "@mui/material/Toolbar";
import { useSetAtom } from "jotai";
import SortMenu from "./SortMenu";
import { sortMenuState } from "./toolbar-state";

export default function Toolbar() {
    const openSortMenu = useSetAtom(sortMenuState.openAtom);
    return (
        <>
            <ToolbarCore sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing={6} alignItems="center">
                    <Button
                        variant="text"
                        startIcon={<SortIcon />}
                        color="secondary"
                        onClick={e => {
                            openSortMenu(e.currentTarget);
                        }}
                    >
                        Sort (working)
                    </Button>
                </Stack>
            </ToolbarCore>
            <SortMenu />
        </>
    );
}
