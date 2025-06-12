import React, { useEffect } from 'react';

const MyService = () => {
     useEffect(() => {
        document.title = "MyService | Service-review";
      }, []);
    return (
        <div>
            MyService
        </div>
    );
};

export default MyService;