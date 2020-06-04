import React from 'react';

import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti
        voluptatibus dolore omnis corrupti nisi blanditiis, adipisci culpa ipsam
        ducimus dignissimos molestias magnam ab debitis alias quaerat eius sint
        doloremque!
      </p>
    </div>
  );
};

export default Rainbow(About);
