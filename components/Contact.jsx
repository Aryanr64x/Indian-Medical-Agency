import { useState } from "react";
import client from "../sanity/client";
const Contact = ()=>{
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = ()=>{
        if(email.length != 0 && message.length != 0){
            const doc = {
                _type: 'message',
                
                email,
                message,
                

            }

            client.create(doc).then((res) => {
                
                setEmail('');
                setMessage('');
               console.log("Submission successful");               
            }).catch((e) => {
                console.log("Submission failure");
            });
        }
    }

    return (
    

    <section className="hero-wrapper">
    <div className="row contact-row">
        <div className="col-lg-6 contact-left d-flex flex-column justify-content-center align-items-center">
            <div className="text-secondary fw-bolder">
                CALL OR WHATSAPP
            </div>
            <div className="mt-1 text-white">
                +91 6290341107
            </div>
            <div className="text-secondary fw-bolder mt-4">
                EMAIL
            </div>
            <div className="mt-1 text-white">
                saket.aryanr64x@gmail.com
            </div>
        </div>
        <div className="col-lg-6 d-flex  flex-column justify-content-center align-items-center">
            <div className="h5">
                Have a Query ?

            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
                    setEmail(e.target.value);
                }} />



                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Message</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{
                    setMessage(e.target.value);
                }} />
                <button className="btn btn-primary text-white mt-3" onClick={submitForm}> SUBMIT </button>
            </div>
        </div>
    </div>
</section>
    );
;}

export default Contact;