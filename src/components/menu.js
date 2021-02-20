import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { createPortal } from "react-dom/cjs/react-dom.development"
import { nominalTypeHack } from "prop-types"

const MenuPage = () => (
    <div style={{
        
        paddingTop: 10,
        margin:0,
        height:55,
        background:'#f4f4f4'
    }}>
    
    <a href="/" style={{
        float: 'left',
        alignItems: 'center',
        textDecoration: 'none',
        marginTop: 13,
        paddingLeft:40,
        fontSize: 20,
    }}>Bitcix</a>
    
    <ul style={{
        listStyle:'none',
        width:600,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        marginLeft: 'auto'
        
    }}>
    
    <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>

    </ul>
    


 </div>
)

export default MenuPage