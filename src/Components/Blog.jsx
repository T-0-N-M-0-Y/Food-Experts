import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div className='md:px-20 px-5'>
                <h1 className=' mt-10 text-xl font-bold'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                <p className='mt-5'>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                <h1 className=' mt-10 text-xl font-bold'>2.How to validate React props using PropTypes??</h1>
                <p className='mt-5'>Ans: PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with. Below is the list of all data types that are considered primitive or the basic ones with their classes that we can use to check props:
                    <br /> optionalArray: PropTypes.array,
                    <br /> optionalBool: PropTypes.bool,
                    <br /> optionalFunc: PropTypes.func,
                    <br /> optionalNumber: PropTypes.number,
                    <br /> optionalObject: PropTypes.object,
                    <br /> optionalString: PropTypes.string,
                    <br /> optionalSymbol: PropTypes.symbol,</p>
                <h1 className=' mt-10 text-xl font-bold'>3. Tell us the difference between nodejs and express js.</h1>
                <p className='mt-5'>Ans: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.</p>
                <h1 className=' mt-10 text-xl font-bold'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className='mt-5'>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;