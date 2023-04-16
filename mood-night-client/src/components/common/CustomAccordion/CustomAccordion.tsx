import { Button } from 'components';
import React, { EventHandler, useState, useRef, useEffect } from 'react';
import { SyntheticEvent } from 'react-draft-wysiwyg';

import { Accordion, AccordionItem, AccordionHeader, AccordionBody, CollapseProps } from 'reactstrap';

interface AccordionItemInterface {
  onClick: EventHandler<React.MouseEvent<HTMLButtonElement>>;
  text: string;
  css?: object;
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
      css={(theme) => ({
        '--bs-accordion-active-bg': theme.colors.background.gradient.light,
        '.accordion-button::after': { display: 'none' },
      })}
      open={open}
    >
      <AccordionItem css={(theme) => ({
        background: theme.colors.background.gradient.light,
        border: 'none',
        'button': {
          padding: 0,
          boxShadow: 'none !important',
          '&:active, &:focus': {
            boxShadow: 'none !important',
          }
        }
      })}>
        <AccordionHeader targetId='1'>
          <div ref={headerRef}>
            {children}
          </div>
        </AccordionHeader>
        <AccordionBody
          css={(theme) => ({
            position: 'absolute',
            zIndex: 1,
            transform: 'translate(-50%, 10%)',
            '.accordion-body': {
              width: '10rem',
              padding: 0,
              border: `1px solid ${theme.colors.border.soft}`,
              background: theme.colors.background.gradient.light,
            }
          })} accordionId='1'>
          <div ref={accordionRef} css={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((_item, index) => <Button
              css={(theme) => ({
                borderBottom: index === items.length - 1 ? 'none' : '1px solid',
                borderRadius: 0,
                '&:hover, &:active, &:focus': {
                  background: `${theme.colors.background.gradient.light} !important`,
                  borderBottom: `${index === items.length - 1 ? 'none' : '1px solid'} !important`
                },
                ...(typeof _item.css === 'function' ? _item.css(theme) : _item.css)
              })} color='link' key={_item.text} onClick={(e) => {
                _item.onClick(e);
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