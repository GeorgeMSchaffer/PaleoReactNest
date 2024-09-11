import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
export interface ITwoColumnPageProps {
    leftColumn: React.ReactNode;
    rightColumn: React.ReactNode
}
export function TwoColumnPage(props: ITwoColumnPageProps) {
    const errors = useAppSelector((state) => state.root.errors);
    const {leftColumn, rightColumn} = props;
    const navLinkStyle = {
        margin: 3,
        padding: 3,
        border: '1px solid #ccc',
        textAlign: 'center' as const,
        "&:hover": {
          background: "#ccc"
        },
        "&:last-child": {
        borderRight: "solid 1px #cccccc"
        }
        
    }
    return (
        <Container fluid style={{border: '1px solid red'}}>


            <Container fluid style={{marginBottom:5}}>
            <Snackbar open={errors?.length ? true : false}>
               
        <Alert  severity="error"><b>Errors:</b>{JSON.stringify(errors)}</Alert>
    </Snackbar>
                <Row xs={12} style={{paddingTop:5,paddingBottom:5}}>
                <Col>Paleo Data Viewer</Col>
                </Row>
                <Row>

                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/">Home</NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/intervals">
                        Intervals
                    </NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/occurances">
                        Occurances
                    </NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/taxa">Taxa</NavLink>
                </Col>
                <Col style={navLinkStyle} md={2}>
                    <NavLink to="/charts">All Charts</NavLink>
                </Col>
   
                </Row>
            </Container>
            <Container fluid={true} style={{border:'1px solid black'}}>
                <Row>
                    <Col>{rightColumn}</Col>
                {/* <Col style={{border:'1px solid black'}} md={3}>{leftColumn}</Col>
                <Col md={9}>
                    {rightColumn}
                </Col> */}
                </Row>
            </Container>
        </Container>
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