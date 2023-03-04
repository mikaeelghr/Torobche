import Search from "../forms/Search";
import {Box, Container, CssBaseline, Link} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import products from "../static/products.json"
const sections = [
    {title: 'موبایل و کالای دیجیتال', url: '#'},
    {title: 'لپ‌تاپ، کامپیوتر، اداری', url: '#'},
    {title: 'هایپر مارکت', url: '#'},
    { title: 'لوازم خانگی', url: '#' },
    { title: 'مد و پوشاک', url: '#' },
    { title: 'زیبایی و بهداشت', url: '#' },
    { title: 'صورتی و تصویری', url: '#' },
    { title: 'خودرو و سایر وسایل نقلیه', url: '#' },
    { title: 'سایر دسته ها', url: '#' },
];

export default function Home() {
    return (
        <div dir='rtl' className=" rmdp-rtl">
            <Header title="تربچه" sections={sections} isInHome={true}/>
            <CssBaseline/>
            <Container align="center">
                <Search data={products.products.data.items}/>
            </Container>
            <Footer/>
        </div>
    )
}