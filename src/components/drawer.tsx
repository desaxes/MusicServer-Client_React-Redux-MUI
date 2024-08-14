import React from 'react'
import { Box, Button, Drawer, List } from "@mui/material";
import { useState } from "react";
import A from './A.tsx'

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box  sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
            <List style={{padding:'20px'}}>
                {['Main', 'Tracks', 'Albums'].map((text, index) => (
                    <A to={'/' + text.toLowerCase()} text={text}/>
                ))}
            </List>
        </Box>
    )
    return (
        <div>
            <Button variant="contained" color="secondary" size="large" onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}
export default DrawerComponent