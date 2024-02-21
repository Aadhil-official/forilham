import React from 'react'
import { Grid } from '@mui/material'
import './Footer1.css'

function Footer1() {
    return (
        <div className='foot'>
            <Grid container spacing={2}>
                <Grid item lg={5} sm={4} xs={3} md={5}></Grid>
                <Grid>
                    <footer>
                        <p>© 2024 All Rights Reserved</p>
                    </footer>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer1