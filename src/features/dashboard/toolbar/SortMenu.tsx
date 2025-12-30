import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { type SortDirection, sortDirectionAtom, sortMenuState as state } from "./toolbar-state";

export default function SortMenu() {
    const [sortDirection, setSortDirection] = useAtom(sortDirectionAtom);
    const canShow = useAtomValue(state.canShowAtom);
    const anchorEl = useAtomValue(state.anchorElAtom);
    const close = useSetAtom(state.closeAtom);
    return (
        <Menu
            open={canShow}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={close}
        >
            {getMenuItem("Unit Name A-Z", "Ascending")}
            {getMenuItem("Unit Name Z-A", "Descending")}
        </Menu>
    );

    function getMenuItem(label: string, direction: SortDirection) {
        const isActive = direction === sortDirection;
        return (
            <MenuItem onClick={activate}>
                {isActive && <ListItemIcon>{<CheckIcon />}</ListItemIcon>}
                <ListItemText inset={!isActive}>{label}</ListItemText>
            </MenuItem>
        );

        function activate() {
            setSortDirection(direction);
            close();
        }
    }
}
