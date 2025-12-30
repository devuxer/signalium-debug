import SortIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ToolbarCore from "@mui/material/Toolbar";
import { component } from "signalium/react";
import { useMenuState } from "@/common/signal-helpers";
import SortMenu from "./SortMenu";

function Toolbar() {
    const sortMenuState = useMenuState();
    return (
        <>
            <ToolbarCore sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing={6} alignItems="center">
                    <Button
                        variant="text"
                        startIcon={<SortIcon />}
                        color="secondary"
                        onClick={e => {
                            sortMenuState.open(e.currentTarget);
                        }}
                    >
                        Sort (working)
                    </Button>
                </Stack>
            </ToolbarCore>
            <SortMenu
                canShow={sortMenuState.canShow()}
                anchorEl={sortMenuState.anchorEl()}
                onClose={sortMenuState.close}
            />
        </>
    );
}

export default component(Toolbar);
