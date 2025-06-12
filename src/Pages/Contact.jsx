import React, { useEffect } from 'react';
import Error from './Error';

const Contact = () => {
    useEffect(() => {
            document.title = "ContactUs | Service-review";
          }, []);
    return (
        <div>
            <Error></Error>
        </div>
    );
};

export default Contact;