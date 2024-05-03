import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { SettingsOutlined } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      
    </div>
  )
}

export default Topbar
