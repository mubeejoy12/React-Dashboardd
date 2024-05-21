import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from '@fullcalendar/core'
import {
  Box,
  List,
  ListItem,
  Typography,
  useTheme,
  AppBar,
  Toolbar,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../../theme";

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { currentEvent, setCurrentEvent } = useState([]);

  const handleDatelick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calenderApi = selected.view.calender;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dataStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm`(are you sure you want to delete the event '${selected.event.title}')`
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"20px"}>
      <Header title={"CALENDER"} subtitle={"Full Calender Interative Page"} />
      {/* // calender side */}
      <Box
        flex={"1 1 20%"}
        backgroundColor={colors.primary[400]}
        p={"15px"}
        borderRadius={"4px"}
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {/* {currentEvent.map((event) => {
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "nemerica",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              ></ListItemText>
            </ListItem>;
          })} */}
        </List>
      </Box>
    </Box>
  );
};

export default Calender;
