import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const AskSomeQuestion = () => {
    return (
       <div className='w-50 mx-auto my-5'>
        <h2 className='my-5 text-primary'>Some Questions & Answers :</h2>
         <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I contact with you?</Accordion.Header>
            <Accordion.Body>
              You can contact with us easily by visiting our Email address or our official phone no.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you have offline center?</Accordion.Header>
            <Accordion.Body>
             No. Currently we have no any offline course. But as soon as we implement our offline course. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is the admission fee expensive?</Accordion.Header>
            <Accordion.Body>
             No. Admission fee is no expensive. It is in your hand.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How long will it take to complete the course?</Accordion.Header>
            <Accordion.Body>
              Our have two type of course for students. One take 6 month and another take one year.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Is the course for beginner or advance?</Accordion.Header>
            <Accordion.Body>
             This programming course is all of beginner and advance programmer.
             But if you know some basic programming you may comfortable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Can I get admission at any time?</Accordion.Header>
            <Accordion.Body>
              No. You can get admission two times in a year .One is summer fall another is winter fall. Summer program start on April and winter program start on December.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
       </div>
      );
};

export default AskSomeQuestion;