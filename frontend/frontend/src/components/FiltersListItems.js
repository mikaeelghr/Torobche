import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {AttachMoney, BrandingWatermark, Category, ExpandLess, ExpandMore, Money, StarBorder} from "@material-ui/icons";
import List from "@mui/material/List";
import {useState} from "react";
import {Box, Checkbox, TextField} from "@mui/material";
import categories from "../static/productCategories.json";
import SearchInNav from "../forms/SearchInNav";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {styled} from '@mui/material/styles';
import Button from "@mui/material/Button";
import SearchIcon from "@material-ui/icons/Search";
import {MainButton} from "./MainButton";


export default function FiltersListItem() {
    const [openBrand, setOpenBrand] = useState(true);
    const [openCategory, setOpenCategory] = useState(true);
    const [openPrice, setOpenPrice] = useState(true);
    const [showAvailable, setShowAvailable] = useState(true);
    const categoriesNames = categories.categories;
    const handleClickBrand = () => {
        setOpenBrand(!openBrand);
    };
    const handleClickCategory = () => {
        setOpenCategory(!openCategory);
    };
    const handleClickPrice = () => {
        setOpenPrice(!openPrice);
    };


    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <>

            <ListItemButton onClick={handleClickBrand}>
                <ListItemIcon>
                    <BrandingWatermark/>
                </ListItemIcon>
                <ListItemText  primary="انتخاب برند"/>
                {openBrand ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={openBrand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <SearchInNav/>
                </List>
            </Collapse>

            <ListItemButton onClick={handleClickCategory}>
                <ListItemIcon>
                    <Category/>
                </ListItemIcon>
                <ListItemText primary="دسته بندی های پیشنهادی"/>
                {openCategory ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={openCategory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {categoriesNames.map((category) => (
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemText style={{display:'flex', justifyContent:'flex-startnp'}} primary={category.name}/>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>


            <ListItemButton onClick={handleClickPrice}>
                <ListItemIcon>
                    <AttachMoney/>
                </ListItemIcon>
                <ListItemText primary="قیمت"/>
                {openPrice ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={openPrice} timeout="auto" unmountOnExit>
                <Grid className=" rmdp-rtl" dir="rtl" container spacing={0.6}>
                    <Grid item xs={5.5}>
                        <TextField label="از" variant="outlined" size="small"/>
                    </Grid>
                    <Grid item xs={5.5}>
                        <TextField label="تا" variant="outlined" size="small"/>
                    </Grid>
                </Grid>
                <Box
                    m={2}
                    //margin
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // sx={boxDefault}
                >
                    <MainButton variant="contained" color="primary" sx={{height: 40}}>
                        اعمال فیلتر قیمت
                    </MainButton>
                </Box>
            </Collapse>


            <ListItemButton onClick={handleToggle(0)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(0) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary="نمایش کالاهای موجود"/>

            </ListItemButton>


        </>
    )
}