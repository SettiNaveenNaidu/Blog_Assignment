import {useFormik} from "formik";
import React from "react";
import * as Yup from 'yup'
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import './style.css'
import { Link } from "react-router-dom";


const initialValues={
    email:"",
    password:"",
};

const Validation =Yup.object({
    email: Yup.string().email("Please enter valid email").required("Enter Your Email"),
    password: Yup.string().min(8).required("Enter your password"),
})

const SignIn=()=>{
   const {login}=useContext(AuthContext)

   const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
        initialValues:initialValues,
        validationSchema: Validation,
        onSubmit : async (values,action) => {
             await login(values)
            /*axios.post('',{values})*/
            action.resetForm();
            /*Axios*/
        }
    });


    return(
        <div className="signin_cont">
           <h1>Sign In</h1>
         <form onSubmit={handleSubmit} className="signin_form">
            <label>Email :</label>       
           <input type="text" name="email" id="email" placeholder="enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {(errors.email && touched.email)?(<span className="errors">{errors.email}</span>):null}
            <label>Password :</label>
           <input type="password" name="password" id="password" placeholder="Password" value={values.password} onChange={handleChange}
            onBlur={handleBlur}/>
            {(errors.password && touched.password)? (<span className="errors">{errors.password}</span>):null}
           <button  type="submit" className="signin_button">SigIn</button>
           <div >If You Dont have an account? </div> 
           <Link to='/signup'>SignUp</Link>        
        </form>        
    </div>
    )
}

export default SignIn