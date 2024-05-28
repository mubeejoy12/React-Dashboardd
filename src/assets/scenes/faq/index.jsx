import { Accordion, AccordionDetails, Box, useTheme,AccordionSummary, Typography } from "@mui/material";
// import AccordionSummary from "@mui/material";

import ExpendMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m={"20px"}>
        <Header title={"FAQ"} subtitle={"Frequently Asked Question Page"} />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt deserunt eaque esse perspiciatis, excepturi commodi iste
              fugiat, tempora rerum architecto cum! Est,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt deserunt eaque esse perspiciatis, excepturi commodi iste
              fugiat, tempora rerum architecto cum! Est,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Your Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt deserunt eaque esse perspiciatis, excepturi commodi iste
              fugiat, tempora rerum architecto cum! Est,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Some Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt deserunt eaque esse perspiciatis, excepturi commodi iste
              fugiat, tempora rerum architecto cum! Est,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Final Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt deserunt eaque esse perspiciatis, excepturi commodi iste
              fugiat, tempora rerum architecto cum! Est,
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Faq;
