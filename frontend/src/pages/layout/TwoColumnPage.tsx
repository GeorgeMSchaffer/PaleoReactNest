import { Alert, Snackbar,Container,AppBar } from '@mui/material';
import React from 'react';

import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import Grid from '@mui/material/Grid2';
import { margin } from '@mui/system';
export interface ITwoColumnPageProps {
    //leftColumn: React.ReactNode;
    rightColumn: React.ReactNode
}
export function TwoColumnPage(props: ITwoColumnPageProps) {
    const errors = useAppSelector((state) => state.root.errors);
    const {rightColumn} = props;
    const navLinkStyle = {
        margin: 2,
        marginLeft: 4,
        marginRight: 4,
        padding: 1,
        color: '#FFF',
        
        border: '1px solid #ccc',
        textAlign: 'center' as const,
        "&:hover": {
          background: "#ccc"
        },
        "&:last-child": {
        borderRight: "solid 1px #cccccc"
        }
        
    }
    const linkStyle = {
        textDecoration: 'none',
        color: '#FFF'
    }
    // const leftColumn = props.leftColumn
    return (
<>
            <Container style={{marginBottom:5}}>
            <Snackbar open={errors?.length ? true : false}>
                <>
                <Alert  severity="error"><b>Errors:</b>{JSON.stringify(errors)}</Alert>
                </>
    </Snackbar>
    <AppBar>
        
                    <Grid container style={{paddingTop:5,paddingBottom:5}}>

                        <Grid size={12}>
                            <NavLink to="/">
                                <span style={{color:'#FFF'}}>Paleo Data Viewer</span>                    
                            </NavLink>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={2} style={navLinkStyle}>
                            <NavLink style={linkStyle} to="/intervals">
                                Intervals
                            </NavLink>
                        </Grid>
                        <Grid size={2} style={navLinkStyle}>
                            <NavLink style={linkStyle} to="/occurances">
                                Occurances
                            </NavLink>
                        </Grid>
                        <Grid size={2} style={navLinkStyle}>
                            <NavLink style={linkStyle} to="/taxa">Taxa</NavLink>
                        </Grid>
                        <Grid size={2} style={navLinkStyle}>
                            <NavLink style={linkStyle} to="/diversity">Diversity</NavLink>
                        </Grid>
                        <Grid size={2} style={navLinkStyle}>
                            <NavLink style={linkStyle} to="/charts">All Charts</NavLink>
                        </Grid>
       
                    </Grid>
    </AppBar>
            </Container>
            <Container>
                <Grid container>
                    <Grid size={12}>{rightColumn}</Grid>
                {/* <Col style={{border:'1px solid black'}} md={3}>{leftColumn}</Col>
                <Col md={9}>
                    {rightColumn}
                </Col> */}
                </Grid>
            </Container>

            </>

    )
    // return (
    //     <>
    //     <Container fluid style={{border: '1px solid red'}}>
    //         <Row  xs={12} style={{border: '1px solid blue'}}>
    //             <Navbar.Brand>Paleo Data Viewer</Navbar.Brand>
    //             <Nav style={{border: '1px solid #ccc'}}>
    //                 <Navbar>
    //                     <Nav.Link style={navLinkStyle} as={Link} to="/">Home</Nav.Link>
    //                     <Nav.Link style={navLinkStyle} as={Link} to="/intervals">Intervals</Nav.Link>
    //                     <Nav.Link style={navLinkStyle} as={Link} to="/occurances">Occurances</Nav.Link>
    //                 </Navbar>
    //             </Nav>
    //         </Row>
    //     </Container>
    //         <Container fluid>
    //             {/* Main Content */}
    //             <Col xs={3} md={3}>
    //                 <aside className="">
    //                     <h2>Left Column</h2>
    //                     <p>Content for the left column goes here.</p>
    //
    //                     <IntervalFilter/>
    //                     <PhylumFilter/>
    //                     {leftColumn}
    //                 </aside>
    //             </Col>
    //             <Col xs={9} md={9}>
    //                 <main className="">
    //                     <h2>Right Column</h2>
    //                     <p>Content for the right column goes here.</p>
    //                     {rightColumn}
    //                 </main>
    //             </Col>
    //         </Container>
    //         {/* Footer */}
    //         <Container>
    //             <Row>
    //                 <footer className="bg-secondary text-white text-center py-3">
    //                     <p>Footer</p>
    //                 </footer>
    //             </Row>
    //         </Container>
    // </>);
};

export default TwoColumnPage;