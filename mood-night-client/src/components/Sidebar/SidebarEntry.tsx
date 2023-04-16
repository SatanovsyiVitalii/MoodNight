import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { PATHS } from 'routes/constants';
import { Entry } from './sidebarConfig';

interface SidebarEntryPropsInterface {
  children: React.ReactNode,
  entry: Entry
}

function SidebarEntry({ entry, children }: SidebarEntryPropsInterface) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Button
      css={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        background: location.pathname === entry.path ? theme.colors.background.gradient.primary : theme.colors.background.gradient.primary,
        minHeight: '3.5rem',
        padding: '0 1rem',
        width: '100%',
        borderRadius: 'unset',
        border: 'none',
        textAlign: 'left',
        '&:hover': {
          background: theme.colors.background.gradient.hover.primary,
        },
        '&:active': {
          background: `${theme.colors.background.gradient.hover.primary} !important`,
        }
      })}
      onClick={() => navigate(entry.path)}
    >
      {entry.icon && <div css={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>{entry.icon}</div>}
      <span css={{ fontSize: '0.85rem' }}>{children}</span>
    </Button>
  );
}

export default SidebarEntry;