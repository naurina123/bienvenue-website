import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link href="/">
          <a>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Home-1"} />
              </ListItemButton>
            </ListItem>
          </a>
        </Link>
        <Link href="/home-2">
          <a>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Home-2"} />
              </ListItemButton>
            </ListItem>
          </a>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
