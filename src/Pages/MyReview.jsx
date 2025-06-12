import React, { useEffect } from 'react';

const MyReview = () => {
    useEffect(() => {
            document.title = "MyReview | Service-review";
          }, []);
    return (
        <div>
           MyReview 
        </div>
    );
};

export default MyReview;