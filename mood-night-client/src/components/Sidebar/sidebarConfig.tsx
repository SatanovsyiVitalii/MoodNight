import React from 'react';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FiPenTool } from 'react-icons/fi';
import { PATHS } from 'routes/constants';

export interface Entry {
  text: string;
  icon?: React.ReactElement;
  path: string;
};

interface SidebarConfig {
  entries: Entry[];
}

const sidebarConfig: SidebarConfig = {
  entries: [
    {
      text: 'Account editor',
      icon: <RiAccountCircleLine />,
      path: PATHS.ACCOUNT_EDITOR,
    },
    {
      text: 'Posts editor',
      icon: <FiPenTool />,
      path: PATHS.POSTS_EDITOR,
    },
    // {
    //   text: 'Events editor',
    //   icon: <BsCalendarEvent />,
    // }
  ],
};

export default sidebarConfig;