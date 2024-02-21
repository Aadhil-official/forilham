import React from 'react'
import { Grid } from '@mui/material'
import Back from '../Component/Back/Back.jsx'
import Button2 from '../Component/Login/Button2.jsx';
import Card from '@mui/material/Card';
import { Avatar, CardContent } from '@mui/material';
import './Forgetpasscheck.css'
import Key from '../Images/Key.png'

function Forgetpass() {
    return (
        <div className='fullset'>
            <Grid container spacing={2}>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                    <Back />
                </Grid>
                <Grid item lg={2} sm={1.3} xs={1.5} md={2}></Grid>
                <Grid item lg={9} sm={9.7} xs={10.5} md={9} className='color'>

                    <h1>Forget Password</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={2.5} sm={1.5} xs={0.5} md={2.5}>
                </Grid>
                <Grid item lg={9.5} sm={10.5} xs={11.5} md={9.5}>

                    <p>Enter your new password</p>
                </Grid>
            </Grid><br></br><br></br>
            <Grid container spacing={2}>
                <Grid item lg={0.5} sm={1.5} xs={0.5} md={2.5}>
                </Grid>
                <Grid item lg={11.5} sm={11.5} xs={11.5} md={9.5}>
                    <Card className='htuname' variant="outlined">
                        <CardContent sx={{ marginTop: "-10px" }}>
                            <Grid container spacing={2}>
                                <Grid item lg={1.5} xs={0} sm={1.5} md={1.5}>
                                    <Avatar alt="Member" className="avatar-xs-hidden" />
                                </Grid>
                                <Grid item lg={10.5} xs={12} sm={10.5} md={10.5}>
                                    <input type="text" placeholder="Username" className='uname' />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid><br></br><br></br>
            <Grid container spacing={2}>
                <Grid item lg={0.5} sm={1.5} xs={0.5} md={2.5}></Grid>
                <Grid item lg={11.5} sm={10.5} xs={11.5} md={9.5}>
                    <Card className='htpass' variant="outlined">
                        <CardContent sx={{ marginTop: "-10px" }}>
                            <Grid container spacing={2}>
                                <Grid item lg={1.5} xs={0} sm={1.5} md={1.5}>
                                    <Avatar src={Key} alt="Member" className="avatar-xs-hidden" />
                                </Grid>
                                <Grid item lg={10.5} xs={12} sm={10.5} md={10.5}>
                                    <input type="password" placeholder="New password" className='pass' />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid><br></br>
            <Grid container spacing={2}>
                <Grid item lg={0.5} sm={1.5} xs={0.5} md={2.5}></Grid>
                <Grid item lg={11.5} sm={10.5} xs={11.5} md={9.5}>
                    <Card className='htpass' variant="outlined">
                        <CardContent sx={{ marginTop: "-10px" }}>
                            <Grid container spacing={2}>
                                <Grid item lg={1.5} xs={0} sm={1.5} md={1.5}>
                                    <Avatar src={Key} alt="Member" className="avatar-xs-hidden" />
                                </Grid>
                                <Grid item lg={10.5} xs={12} sm={10.5} md={10.5}>
                                    <input type="password" placeholder="Confirm password" className='pass' />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid><br></br>
            <Grid container>
                <Grid item lg={0.5} sm={1.5} xs={0.5} md={2.5} ></Grid>
                <Grid  item lg={11.5} sm={10.5} xs={11.5} md={9.5}>
                    <Button2 name="Save"/>
                </Grid>
                </Grid>
        </div>
    )
}

export default Forgetpass