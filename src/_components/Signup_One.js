import React, {useState} from "react";
import useForm from "../_components/useForm"
import {makeStyles} from "@material-ui/core/styles";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {
    Typography,
    Button,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import BlockSharpIcon from "@material-ui/icons/BlockSharp";

const useStyles = makeStyles({
    main_container: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    form_container:{
        position: "relative",
        width: "28.125rem",
        height: "auto",
        padding: "2rem"
    },
    input_field: {
        width: "100%",
        marginBottom: "1rem"
    },
    button: {
        width: "100%",
        height: "3rem",
        background: "linear-gradient(#EE7623, #E2251D)",
        color: "#fff",
        "& :hover":{
            color: "black",
            opacity: ".7",
            transition: ".3s esase-in-out"
        }
    },
    disable_button: {
        background: "rgba(0,0,0,0.38)",
        width: "100%",
        height: "3rem"
    }
})

const Signup_One = (activeStep, steps, handleNext) => {
    //Define State Schema
    const stateSchema = {
        first_name: {value: "", error: ""},
        last_name: {value: "", error: ""},
        email: {value: "", error: ""},
        password: {value: "", error: ""},
        confirm_password: {value: "", error: ""},
    }

    const stateValidadeSchema = {
        first_name: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "First Name must have more then 1 Charater"
            }
        },
        last_name: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "Last Name must have more then 3 Charater"
            }
        },
        email: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "Invalid email format"
            }
        },
        password: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value),
                error: "Password must contain atleast 8 charaters and 1 Special charater"
            }
        },
        confirm_password: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value),
                error: "Password must contain atleast 8 charaters and 1 Special charater"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidadeSchema);

    const {first_name, last_name, email, password, confirm_password} = values;

    const [showPasswordValue, setShowPasswordValue] = useState({showPassword: false});
    const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({showConfirmPassword: false});

    const handleClickShowPassword = () => {
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

    const classes = useStyles();

    return (
        <div className={classes.main_container}>
            <Typography
                variant="h5"
                style={{ color: "#999", textAlign: "center" }}
            >
                Sign Up with Email
            </Typography>
            <div className={classes.form_container}>
                <form>
                    <TextField
                        className={classes.input_field}
                        label="First Name"
                        variant="outlined"
                        name="first_name"
                        value={first_name}
                        onChange={handleOnChange}
                    />
                    {errors.first_name && dirty.first_name && (
                        <Typography style={{marginTop: "0", color: "red", fontWeight: "200"}}>{errors.first_name}</Typography>
                    )}

                    <TextField
                        className={classes.input_field}
                        label="Last Name"
                        variant="outlined"
                        name="last_name"
                        value={last_name}
                        onChange={handleOnChange}
                    />
                    {errors.last_name && dirty.last_name && (
                        <Typography style={{marginTop: "0", color: "red", fontWeight: "200"}}>{errors.last_name}</Typography>
                    )}

                    <IntlTelInput
                        preferredCountries={["mz"]}
                        style={{}}
                    />
                    <TextField
                        className={classes.input_field}
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                    {errors.email && dirty.email && (
                        <Typography style={{marginTop: "0", color: "red", fontWeight: "200"}}>{errors.email}</Typography>
                    )}

                    <FormControl className={classes.input_field} variant="outlined">
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            labelWidth={70}
                            type={showPasswordValue.showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        edge="end"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPasswordValue.showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && dirty.password && (
                            <Typography style={{marginTop: "0", color: "red", fontWeight: "200"}}>{errors.password}</Typography>
                        )}
                    </FormControl>

                    <FormControl className={classes.input_field} variant="outlined">
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                            labelWidth={135}
                            type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
                            name="confirm_password"
                            value={confirm_password}
                            onChange={handleOnChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        edge="end"
                                        onClick={handleClickShowConfirmPassword}
                                    >
                                        {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {confirm_password !== password ? (
                            <Typography style={{marginTop: "0", color: "red", fontWeight: "200"}}>Password do not Match</Typography>
                        ): null}
                    </FormControl>
                    
                    {
                        !first_name || !last_name || !email || !password || !confirm_password || confirm_password !== password ? (
                            <Button 
                            className={classes.disable_button}
                            variant="conteined"
                            type="submit"
                            disabled
                            endIcon={<BlockSharpIcon/>}
                        >
                            {activeStep === steps.length ? "Finish" : "Sign Up"}
                        </Button>
                        ) : (
                            <Button
                            className={classes.button}
                            variant="conteined"
                            type="submit"
                            onClick={handleNext}
                            endIcon={<SendSharpIcon/>}
                        >
                            {activeStep === steps.length ? "Finish" : "Sign Up"}
                        </Button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default Signup_One
