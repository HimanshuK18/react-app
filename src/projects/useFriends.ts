import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID: any) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status: { isOnline: React.SetStateAction<null>; }) {
    setIsOnline(status.isOnline);
  }


  return isOnline;
}