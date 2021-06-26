import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Form = () => {
    <div>
        <form action="" method="post">
           <img src="" alt=""/>
           <br/>
           <br/>
           <p>Send Message</p>
           <br/>
           <br/>
           <label htmlFor="">Get in Touch:</label>
           <select className= "optionals" name="contact-option" id="">
               <option value="personal">Request a Quote</option>
               <option value="business">General Question</option>
           </select>
           <br/>
           <br/>
           <label htmlFor="">Enter Your Name:</label>
           <input type="text" className="name" placeholder="name" minlength="4" maxlength="40" required/>
           <br/>
           <br/>
           <label htmlFor="">Enter Your Email:</label>
           <input type="email" className="email" name="" id="" placeholder="email" required/>

        </form>
    </div>
    

}
export default Form