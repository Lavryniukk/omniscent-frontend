'use client'
import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';

const SidebarToggleButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const arrowAnimation = useSpring({
    transform: !showSidebar ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <button onClick={toggleSidebar} className="sidebar-toggle-button">
      <animated.div style={arrowAnimation}>
         <MdArrowBackIos size='40' className={`text-text`}/>
      </animated.div>
    </button>
  );
};

export default SidebarToggleButton;