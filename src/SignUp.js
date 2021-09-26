import React from 'react'
import {Formik , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import logo1 from './logo1.png'

const SignUp = ()=>(
   
    
    <Formik  
        initialValues={{user:"",desig:""}}
        onSubmit={(values,{setSubmitting})=>{
            setTimeout(()=>{
                console.log("login",values)
                alert(`WELCOME ${values.user} with designation number ${values.desig}`)
            },50);
        }}
           validationSchema={Yup.object().shape({
               user : Yup.string()
                      .required("Enter name"),
                 desig : Yup.string()
                     .required("Enter valid number")     

           })}
        
        >

        {props=>{
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            
            return(
                <div className="card">
                      <div class="upr">
                        <img src={logo1} class="lg"/>
                        <span class="txt">optionA</span>
                     </div>
                <form  autoComplete="off" onSubmit={handleSubmit}  > 
                    <div className="mt-5 marg">
                    <label htmlFor="name" className="attr">Name<span className="star">*</span></label>
                    <br/>
                  
                    {errors.user && touched.user && (
                         <div className="inp">
                              <i class="fa-solid fa-circle-exclamation"></i>{errors.user}</div>
                        
                    )}
                    <input type="text" name="user" value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`int ${errors.user && touched.user && "error"}`}
                    placeholder="Enter Full Name"/>
                    </div>
                    
                 
                    <div className="mt-4 marg">
                    <label htmlFor="desig" className="attr">Designation<span className="star">*</span></label>
                    <br/>
                    
                    {errors.desig && touched.desig && (
                        <div className="inp1">
                             <i class="fa-solid fa-circle-exclamation"></i>{errors.desig}</div>
                    )}
                    <input type="text" value={values.desig} name="desig"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`int {errors.desig && touched.desig && "error"}`}
                    placeholder="Enter Position"/>
                    </div>

                    
                    <div class="my-4" id="h">
             <div class="dropdown">
             <div class="btn-group">
             <div class="dropdown">
             <span className="attr px-3"> LANGUAGE</span>
             <br/>
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" id="drop">
            ENGLISH
             </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="item">
             <li><a class="dropdown-item U" href="#">ENGLISH</a></li>
             <li><a class="dropdown-item U" href="#">HINDI </a></li>
             <li><a class="dropdown-item U" href="#">TAMIL</a></li>
            </ul>
    </div>
</div>
</div>
</div>  
                    <button type="submit" className="btn" disabled={isSubmitting} id="butn">Login</button>
                </form>
                <div class="footer">
           
           <div class="footer">
           Powerd by <img src={logo1} class="ft"/>
                        <span class="tx">optionA</span>
                     </div>
         </div>
                </div>
                
            )
        }}
        </Formik>

)

export default SignUp