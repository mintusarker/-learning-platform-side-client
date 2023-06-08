import React from 'react';

const BestSelling = () => {
    return (
        <div>
            <div class="container my-3 py-2" id="price-table">
                <h2 class="text-center font-weight-bold d-block fs-2 mb-3">Check our pricing</h2>
                <div class="row justify-content-center align-items-center">
                    <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5">
                        <h4 class="my-4">NEW LEARNERS</h4>
                        <p class="font-weight-bold">$ <span class="display-1 font-weight-bold">0</span> / MO.</p>
                        <ul class="list-unstyled">
                            <li>Up to 5 Documents</li>
                            <li>Up to 3 Testimonials</li>
                            <li>5 team Members</li>
                            <li>Limited Support</li>
                        </ul>

                        {/* <a href="#"  class="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a> */}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
                        <h4 class="my-4">ADVANCED</h4>
                        <p class="font-weight-bold">$ <span class="display-2 font-weight-bold">10</span> / MO.</p>
                        <ul class="list-unstyled">
                            <li>Up to 15 Documents</li>
                            <li>Up to 10 Testimonials</li>
                            <li>25 team Members</li>
                            <li>Limited Support</li>
                        </ul>
                        {/* <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-green">Get Free</a> */}
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5">
                        <h4 class="my-4">PROFESSIONAL</h4>
                        <p class="font-weight-bold">$ <span class="display-2 font-weight-bold">30</span> / MO.</p>
                        <ul class="list-unstyled">
                            <li>Unlimited Documents</li>
                            <li>Unlimited Testimonials</li>
                            <li>Unlimited Members</li>
                            <li>Unlimited Support</li>
                        </ul>
                        {/* <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSelling;