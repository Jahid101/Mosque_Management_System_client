import React from 'react';
import emailjs from "emailjs-com";

// npm i emailjs-com --save

const Email = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_huc15i9', 'template_cf5pq6u', e.target, 'user_WOw3LH4lRhjLz4iq5LqmR')
            .then((result) => {
                if(result){
                    alert('Thanks for your message')
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id="email" className="p-2" style={{ backgroundColor: '#00022e' }}>
            <h1 className="pt-3 text-center text-light font-details-b pb-3 mt-5">Email</h1>
            <div className="container mb-5">

                <div className="col-md-12 mx-auto mt-2">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" required />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info btn-lg" value="Send"></input>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Email;
