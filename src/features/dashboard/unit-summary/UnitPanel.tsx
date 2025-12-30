import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { component } from "signalium/react";
import type { UnitState } from "./unit-state";

interface Props {
    state: UnitState;
}

function UnitPanel({ state }: Props) {
    return (
        <Accordion>
            <AccordionSummary component="div" expandIcon={<ExpandMoreIcon />}>
                {state.name}
            </AccordionSummary>
            <AccordionDetails sx={{ width: "100%" }}>
                <p>{state.type}</p>
                <p>{state.code}</p>
                <p>{state.name}</p>
            </AccordionDetails>
        </Accordion>
    );
}

export default component(UnitPanel);
