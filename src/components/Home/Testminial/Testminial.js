import React from 'react';
import { Accordion } from 'react-bootstrap';

const Testminial = () => {
    return (
        <div className="container">
            <div className="row py-5 ">
                <div className="col-md-6 testimonial-rigth">
                    <h2>WHY CHOOSE US !!</h2>
                    <hr />
                    <div className="row me-3 py-2">
                        <div className="">
                            <h5>1. FINANCING MADE EASY</h5>
                            <p>Our finance department strives to find financial solutions to save you money and offer you the best deal.</p>
                        </div>
                        <hr />
                        <div className="">
                            <h5 >2. WIDE RANGE OF BRANDS</h5>
                            <p>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                        </div>
                        <hr />
                        <div className="">
                            <h5>3. TRUSTED BY THOUSANDS</h5>
                            <p>10 new offers every day. 350 offers on-site, trusted by a community of thousands of users.</p>
                        </div>
                        <hr />
                        <div>
                            <h5>4. SERVICE &amp; MAINTENANCE</h5>
                            <p>Our service department maintains your car to stay safe on the road for many more years.</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-6 mt-5 testimonial-left">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Do you want to sell a car?</Accordion.Header>
                            <Accordion.Body>
                                What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today! You can contact with us by social media like facebook, instagram, twitter, linkedin.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Are you looking for new car?</Accordion.Header>
                            <Accordion.Body>
                                Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How to schedeule a service online?</Accordion.Header>
                            <Accordion.Body>
                                Maecenas consectetur nulla dolor, ac porttitor nunc hendrerit quis. Proin vitae rhoncus purus, id commodo massa. Aliquam erat volutpat.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How to contact with us?</Accordion.Header>
                            <Accordion.Body>
                                You can visit in our website caratlus.com. We have social media as well. You can contact with us by social media like facebook, instagram, twitter, linkedin.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Do you need emergency service?</Accordion.Header>
                            <Accordion.Body>
                                If you need any emergency service you can call us. You can messsage us as well. We will provide you best service that we have. We will make sure that you get the service you want.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>How to pay our service?</Accordion.Header>
                            <Accordion.Body>
                            Payments are made using a user’s existing account or with a credit card. Money can be sent directly to an email address, thus prompting the users to sign up for a new PayPal account.                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Testminial;