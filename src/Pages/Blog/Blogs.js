import React from 'react';

const Blogs = () => {
    return (
        <div className='border rounded-3 border-2 w-75 mx-auto my-5 border-danger px-5'>
            <h2 className='mt-4'>Questions :</h2>
            <br />
            <div className='border rounded border border-info p-4'>
                <p className='text-primary fs-5'>Question : What is cors?</p>
                <p>Answer : CORS stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access. It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers.Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>

            </div>
            <br />

            <div className='border rounded border-1 border-warning p-4'>
                <p className='text-primary fs-5'>Question : Why are you using firebase? What other options do you have to implement authentication? </p>
                <p>Answer : Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. Auth0, MongoDB, Passport, Okta are the most popular alternatives and competitors to Firebase Authentication. </p>

            </div>
            <br />

            <div className='border rounded border-1 border-primary p-4'>
                <p className='text-primary fs-5'>Question : How does the private route work?</p>
                <p>Answer : The private route component is used to protect selected pages in a React app from unauthenticated users. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.</p>

            </div>
            <br />

            <div className='border rounded border-1 border-success p-4'>
                <p className='text-primary fs-5'>Question : What is Node? How does Node work?</p>
                <p>Answer : Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

            </div>
            <br />
        </div>
    );
};

export default Blogs;