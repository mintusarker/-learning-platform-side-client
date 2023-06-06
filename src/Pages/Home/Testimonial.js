import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css'

const Testimonial = () => {


    var testimonialsData = [
        {
            id: 1,
            name: 'John Wills',
            description: 'We recognize and celebrate success better than any other company I have ever worked for. Leaders train, develop, and promote employees from within and maintain the best talent with competitive pay.I feel very proud and humbled to be a part of this organization. I feel so fortunate to work at a company where employees are treated so well.',
            designation: 'Manager'
        },
        {
            id: 2,
            name: 'Jasmine Perry',
            description: 'As a newcomer to the firm, I have found the transparent communication of our collective aspirations to be remarkable. The firm leadership communicates a consistent message that supports the aim of the entire team. As we mark our 75th anniversary, we are well positioned to look toward the future and continue to raise the bar for the years to come.'
        },
        {
            id: 3,
            name: 'Rocky Johnson',
            description: 'I am very pleased with the organization and the direction that we’re are heading. It’s obvious that the owner is committed to making this a first class operation and our success will be a reflection of his dedication. When I see leadership demonstrate this kind of behavior, I feel very proud and humbled to be a part of this organization.',
            designation: 'CEO'
        },
        {
            id: 4,
            name: 'Alex Rusia',
            description: "Although I’m fairly new, I can tell this is a best place to work. I respect and look up to the leaders of this organization. They demonstrate that doing the right thing is what will make the company successful and employees happy.I feel very proud and humbled to be a part of this organization.",
            designation: 'CEO'
        },
        {
            id: 5,
            name: 'Linkhon Tubela',
            description: "As a newcomer to the firm, I have found the transparent communication of our collective aspirations to be remarkable. The firm's leadership communicates a consistent message that supports the aim of the entire team. As we mark our 75th anniversary, we are well positioned to look toward the future and continue to raise the bar for the years to come.",
            designation: 'CEO'
        },
    ]

    return (
        <section id="test" className="testimonial w-100 mx-auto my-5">
            <Container fluid>
                <div className="title-holder text-center">
                    <h2 className='fs-1 mb-2'>Testimonials</h2>
                    <div className="subtitle">What they say about us</div>
                </div>
                <Carousel className='mx-auto w-75 my-5' controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item interval={3000} key={testimonials.id} className='px-5'>
                                    <blockquote className='text-justify text-dark'>
                                        <p><q>{testimonials.description}</q> </p>
                                        <p className='pb-5 text-white'>
                                            <cite>
                                                <span className='name'>{testimonials.name}</span>
                                                <span className='designation'>{testimonials.designation}</span>
                                            </cite>
                                        </p>
                                    </blockquote>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
            </Container>
        </section>
    );
};

export default Testimonial;
