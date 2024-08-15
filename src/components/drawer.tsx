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
        <Box sx={{ width: 300 }} role="presentation" onMouseLeave={toggleDrawer(false)}>
            <List style={{ padding: '20px' }}>
                {['Main', 'Tracks', 'Albums'].map((text, index) => (
                    <A to={'/' + text.toLowerCase()} text={text} toggleDrawer={toggleDrawer}/>
                ))}
            </List>
        </Box>
    )
    return (
        <div>
            <Button onMouseEnter={toggleDrawer(true)} variant="contained" color="secondary" size="large" >Menu</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}
export default DrawerComponent