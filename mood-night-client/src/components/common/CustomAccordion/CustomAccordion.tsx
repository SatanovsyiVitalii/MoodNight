import { Button } from 'components';
import React, { EventHandler, useState, useRef, useEffect } from 'react';

import { Accordion, AccordionItem, AccordionHeader, AccordionBody, CollapseProps } from 'reactstrap';

export interface AccordionItemInterface {
  onClick?: EventHandler<React.MouseEvent<HTMLButtonElement>>;
  text?: string;
  css?: object;
  type?: 'divider' | 'item';
}

interface AccordionPropsInterface extends CollapseProps {
  name: string;
  children: React.ReactNode;
  items: AccordionItemInterface[],
}

function CustomAccordion({ name, children, items, ...rest }: AccordionPropsInterface) {
  const accordionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState('');
  const toggle = (id: string) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
          setOpen('');
        }
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Accordion
      //@ts-ignore
      toggle={toggle}
      css={{
        '.accordion-button::after': { display: 'none' },
      }}
      open={open}
    >
      <AccordionItem css={{
        border: 'none',
        background: 'transparent !important',
        'button': {
          padding: '0 1rem',
          background: 'transparent !important',
          boxShadow: 'none !important',
          '&:active, &:focus': {
            boxShadow: 'none !important',
            background: 'transparent !important',
          }
        }
      }}>
        <AccordionHeader targetId='1'>
          <div ref={headerRef}>
            {children}
          </div>
        </AccordionHeader>
        <AccordionBody
          css={(theme) => ({
            position: 'absolute',
            zIndex: 1,
            borderRadius: '0.35rem',
            overflow: 'hidden',
            transform: 'translate(-50%, 10%)',
            '.accordion-body': {
              width: '10rem',
              padding: 0,
              border: `1px solid ${theme.colors.border.soft}`,
              background: theme.colors.background.gradient.light,
            }
          })} accordionId='1'>
          <div ref={accordionRef} css={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem 0'
          }}>
            {items.map((_item, index) => _item.type === 'divider' ? <hr css={{ margin: '0.5rem 0' }} /> : <Button
              css={(theme) => ({
                borderRadius: 0,
                color: `${theme.colors.text.dark} !important`,
                fontSize: '0.85em',
                textAlign: 'left',
                '&:hover, &:active, &:focus': {
                  color: theme.colors.text.dark,
                  background: `${theme.colors.background.gradient.hover.light} !important`,
                },
                ...(typeof _item.css === 'function' ? _item.css(theme) : _item.css)
              })} color='link' key={_item.text} onClick={(e) => {
                if (_item.onClick) {
                  _item.onClick(e);
                }
                setOpen('');
              }}>
              {_item.text}
            </Button>)}
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}

export default CustomAccordion;