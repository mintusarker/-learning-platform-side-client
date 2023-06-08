import React from 'react';
import Contact from './Contact';

import About from './About';
import BestSelling from './BestSelling';
import Explore from './Explore';
import WhyBest from './WhyBest';
import Summary from './Summary';
import Header from './Header';
import Testimonial from './Testimonial';
import CourseSummary from './CourseSummary';
import FreeCourse from './FreeCourse';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <CourseSummary></CourseSummary>
      <Explore></Explore>
      <WhyBest></WhyBest>
      <Testimonial></Testimonial>
      <Summary></Summary>
      <BestSelling></BestSelling>
      <FreeCourse></FreeCourse>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;