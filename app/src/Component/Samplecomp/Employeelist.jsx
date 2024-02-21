import React from 'react'
import Card from '@mui/material/Card';
import { Avatar, CardContent, Grid, Typography } from '@mui/material';

function Employeelist({ obj }) {

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                <Card variant="outlined" style={{ height: "50px" }}>
                    <CardContent sx={{ marginTop: "-10px" }}>
                        <Grid container spacing={2}>
                            <Grid item lg={3} xs={0} sm={3} md={3}>
                                <Avatar alt="Member" />
                            </Grid>
                            <Grid item lg={9} xs={12} sm={9} md={9}>{obj.name}</Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Typography>
        </div>
    )
}

export default Employeelist