import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { component } from "signalium/react";
import { type SortDirection, sortDirection } from "./toolbar-state";

interface Props {
    canShow: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

function SortMenu({ canShow, anchorEl, onClose }: Props) {
    return (
        <Menu
            open={canShow}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={onClose}
        >
            {getMenuItem("Unit Name A-Z", "Ascending")}
            {getMenuItem("Unit Name Z-A", "Descending")}
        </Menu>
    );

    function getMenuItem(label: string, direction: SortDirection) {
        const isActive = direction === sortDirection.value;
        return (
            <MenuItem onClick={activate}>
                {isActive && <ListItemIcon>{<CheckIcon />}</ListItemIcon>}
                <ListItemText inset={!isActive}>{label}</ListItemText>
            </MenuItem>
        );

        function activate() {
            sortDirection.value = direction;
            onClose();
        }
    }
}

export default component(SortMenu);
