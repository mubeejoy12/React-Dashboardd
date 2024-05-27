import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material";
import AccordionSummary from "@mui/material";
import AccordionDetails from "@mui/material";
import ExpendMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m={"200px"}>
        <Header title={"FAQ"} subtitle={"Frequently Asked Question Page"} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
