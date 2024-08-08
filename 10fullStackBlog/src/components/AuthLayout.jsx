import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Protected({children, authentication = true}) {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {

    if (authStatus === undefined) {
      console.error('Authentication status is undefined.');
    }

    if (authentication && authStatus !== authentication) {
      console.error('User is not authenticated.');
      try {
        navigate('/login');
      } catch (error) {
        console.error('Error navigating:', error);
      }
    } else if (!authentication && authStatus !== authentication) {
      console.error('User is already authenticated.');
      navigate('/');
    }
    
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? null : <>{children}</>
}

export default Protected
