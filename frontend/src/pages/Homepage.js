import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.gif";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <>
            <StyledContainer>
                <Grid container spacing={0}>
                    {/* Image on the left side */}
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Students} alt="students" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </Grid>
                    {/* Text on the right side */}
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <StyledPaper elevation={3}>
                            <StyledTitle>
                                Welcome to
                                <br />
                                WISDOM WAVE
                                <br />
                            </StyledTitle>
                            <StyledText>
                                <b>Riding The Wave Of Wisdom</b>
                            </StyledText>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </StyledContainer>
            <Footer>
                &copy; 2024 Wisdom Wave. All Rights Reserved.
            </Footer>
        </>
    );
};


const StyledContainer = styled(Container)`
  margin-top: 50px; /* Adjust according to header height */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px); /* Adjust according to header height */
`;

const StyledPaper = styled.div`
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  color: #666666;
  margin-top: 20px;
  margin-bottom: 20px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Footer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Homepage;