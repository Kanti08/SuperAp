import React, { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
const SignUpForm=()=>{
    const [formValues,setFromValues] = useState({
        check: false,
        name: "",
        username: "",
        mail: "",
        mobile: "",
        
    
    });
    const [nameError,setNameError] = useState(false);
    const [userNameError, setUserError] = useState(false);
    const [mailNameError, setMailError] = useState(false);
    const [MobileNameError, setMobileError] = useState(false);
    const [SignUpError, setSignUpError] = useState(false);
    
    
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setFromValues({...formValues,[e.target.name]: e.target.value})
          setFromValues({...formValues , gender:"male"});
            };
    
          const handleSubmit =(e) =>{
            e.preventDefault();

            let valid = true;
            if(!(formValues.name.trim().length > 0)){
                setNameError(true);
                valid = false;
            }else{
                setNameError(false);
            }

            if (!(formValues,username.trim().length>0)){
            }else{
          }
              if (!(formValues, mail.trim().length > 0)) {
              } else {
              }
              if (!(formValues, mobile.trim().length > 0)) {
              } else {
              }
               if(!formValues.check){
                setSignUpError(true);
                valid = false;

               }else{
                setSignUpError(false);
               }
               
               if (valid){
         window.localStorage.setItem("userData",JSON.stringify(formValues))
         navigate("/genre");
               }
            };
            return(
                <div className={styles.body}>
                    <p className={styles.super}>SuperApp</p>
                    <p>create new Account</p>
                    <p>
                        Emil<span style={{color:"green"}}>|</span>Google
                    </p>
                    <form>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="name"
                            placeholder="Name"
                        ></input>
                        {nameError ? (
                            <p className={styles.error}>Please fill correctly</p>
                        ) : (
                            <></>
                        )}
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="username"
                            placeholder="UserName"
                        ></input>
                        {userNameError ? (
                            <p className={styles.error}>Please fill correctly</p>
                        ) : (
                            <></>
                        )}
                        <input
                            onChange={(e) => handleChange(e)}
                            type="email"
                            name="mail"
                            placeholder="Email"
                        ></input>
                        {mailError ? (
                            <p className={styles.error}>Please fill correctly</p>
                        ) : (
                            <></>
                        )}
                        <input
                            onChange={(e) => handleChange(e)}
                            type="tel"
                            name="mobile"
                            placeholder="Mobile"
                        ></input>
                        {mobileError ? (
                            <p className={styles.error}>Please fill correctly</p>
                        ) : (
                            <></>
                        )}
                        <label>
                            <input
                                onChange={(e) =>
                                    setFromValues({
                                        ...formValues,
                                        [e.target.name]: e.target.checked,
                                    })
                                }
                                type="checkbox"
                                name="check"
                            />
                            Share my registration data with Superapp
                        </label>
                        {signUpError ? <p className={styles.error}>Please tick this</p> : <></>}
                        <button type="submit" onClick={(e) => handleSubmit(e)}>
                            SIGN UP
                        </button>
                        <footer className={styles.footer}>
                            <p>
                                By clicking on Sign up. you agree to Superapp
                                <span style={{ color: "green" }}> Terms and Conditions of Use</span>
                            </p>
                            <p>
                                To learn more about how Superapp collects, uses, shares and protects
                                your personal data please head Superapp
                                <span style={{ color: "green" }}> Privacy Policy</span>
                            </p>
                        </footer>
                    </form>
                </div>
                
            );
};
export default SignUpForm
