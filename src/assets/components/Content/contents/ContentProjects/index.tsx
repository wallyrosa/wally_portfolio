import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";

export function ContentProject() {
    return (
        <Box className="fullScreen">
            <Box className="marginLine">
            <LineRight width={"60%"} />
            </Box>
            <Box className="marginLine">
            <LineLeft width={"60%"} />
            </Box>
        </Box>
    )
}