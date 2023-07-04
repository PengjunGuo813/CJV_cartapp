/**********************************************
Task # 3
Full Name : Pengjun Guo
Student ID#: 139448229
Email : pguo9@myseneca.ca
Section : NAA

Authenticity Declaration: 
I declare this submission is the result of my own work and has not been. shared with any other student or 3rd party 
content provider. This submitted. 
piece of work is entirely of my own creation. 
***********************************************************************************************
Date: Jun 27, 2023
**********************************************/

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
