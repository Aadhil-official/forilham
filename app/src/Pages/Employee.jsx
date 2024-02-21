import React from 'react'
import { Grid } from '@mui/material'
import Back from '../Component/Back/Back.jsx'
import './Employee.css'
import Filter from '../Component/Filter/Filter.jsx';
import Search from '../Component/Search/Search.jsx';
import Employeelist from '../Component/Samplecomp/Employeelist.jsx';
//import SearchComponent from '../Component/SeachComponant/SearchComponent.jsx'
//import Searcbyms from '../Component/fromAkar/Search/'s
import Divider from '@mui/material/Divider';
import Footer1 from '../Component/Footer/Footer1.jsx';
import Button1 from '../Component/Button/Button1.jsx';


const edetails = {
    name: 'Employee Name',
    email: 'emp@gmail.com',
    phone: +94750213273,
    address: 'Japan',
    designation: 'Admin of Create employee group'
};

function Employee() {

    return (
        <>
            <Grid container spacing={2} alignItems="flex-start"> {/* Set alignItems to flex-start */}
                <Grid item lg={5} sm={4.3} xs={3.5} md={5}>
                    <Back />
                </Grid>
                <Grid item lg={5} sm={7} xs={7} md={4}>
                    <h1>Employee List</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid lg={10} md={9}></Grid>
                <Grid item lg={2} sm={12} xs={12} md={3} className='forSmall'>
                    <Button1 className='addb' name="Add new Employee">
                    </Button1>
                </Grid>

            </Grid>
            <Divider /><br></br>
            <Grid container spacing={2}>
                <Grid item lg={3} sm={5} xs={5} md={3}>
                    <Filter className='fltr' />
                </Grid>
                <Grid item lg={6} sm={2} xs={2} md={6}></Grid>
                <Grid item lg={3} sm={5} xs={5} md={3}>
                    <Search />
                </Grid>
            </Grid><br></br>
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Employeelist obj={edetails} />
            <Footer1 />
        </>
    )
}

export default Employee
