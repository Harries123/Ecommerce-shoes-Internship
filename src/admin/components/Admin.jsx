import React, { useState } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react'
import  { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
const menu=[
    {name: "Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name: "Product" ,path:"/admin/products"},
    {name: "Customers" ,path:"/admin/customers"},
    {name: "Orders" ,path:"/admin/orders"},
    {name: "AddProduct" ,path:"/admin/product/create"},
    {name: "" ,path:""},
]

const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"

        }}> 
        
          {isLargeScreen && <Toolbar/>}
          <list>
            {menu.map((item,index)=> <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                   <ListItemIcon>
                    {/* {index%2===0?<InboxIcon/>:<EmailIcon/>} */
                    item.icon
                    }
                   </ListItemIcon>
                </ListItemButton>
                </ListItem>)}
          </list>
          </Box>
    )
  return (
    <div>
      
    </div>
  )
}

export default Admin
