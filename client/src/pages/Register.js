import { Stack, Container, Typography, Box, Paper, Grid, TextField, FormControlLabel, Checkbox, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');


    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password === cpassword) {
            try {
                const url = 'http://localhost:1234/user'
                const payload = {
                    username,
                    email,
                    password,
                }
                const result = await axios.post(url, payload)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('Password Not match')
        }
    }


    return (

        <div style={{
            marginTop: 100
        }}>
            <Paper>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">Sign Up Form</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="username"
                                    name="username"
                                    label="Username"
                                    fullWidth
                                    margin="dense"
                                    onChange={e => setusername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    type={'email'}
                                    margin="dense"
                                    onChange={e => setemail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    margin="dense"
                                    onChange={e => setpassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    margin="dense"
                                    onChange={e => setcpassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        <Box mt={3} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type={'submit'}
                                onClick={handleSubmit}
                                style={{
                                    // width: '40%',
                                }}
                            >
                                Register
                            </Button>
                            <Typography
                                variant={'h5'}
                                onClick={() => {
                                    history.push('/login')
                                }}
                            >
                                Login here?
                            </Typography>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </div>

    )
}

export default Register


