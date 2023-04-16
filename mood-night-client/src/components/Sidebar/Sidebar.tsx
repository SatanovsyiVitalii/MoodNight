import React from 'react';
import SidebarEntry from './SidebarEntry';
import sidebarConfig from './sidebarConfig';
import { Logo } from 'components';

function Sidebar() {
  return (
    <div css={(theme) => ({
      width: '14rem',
      height: '100vh',
    })}>
      <div css={(theme) => ({
        background: theme.colors.background.gradient.primary,
        height: '100%',
      })}>
        <div css={{ padding: '1rem' }}>
          <Logo />
        </div>
        <div>
          {sidebarConfig.entries.map((entry) => <SidebarEntry key={entry.path} entry={entry}>
            {entry.text}
          </SidebarEntry>)}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;