import React from 'react';
import GuestButton from '@site/src/components/GuestButton';

export default function Root({children}) {
  return (
    <>
      {children}
      <GuestButton />
    </>
  );
}