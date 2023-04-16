function EventPreview() {
  return (
    <article css={(theme) => ({
      border: `1px solid ${theme.colors.border.dark}`,
      background: theme.colors.background.solid.light,
    })}>
      <header>
        <img
          css={{
            width: '100%',
          }}
          src='/images/pic04.jpg'
        />
      </header>
      <div css={{
        padding: '1.25em 4.25em 1.25em 1.25em',
      }}>
        <h3 css={{ fontSize: '0.7em', fontWeight: 'bold' }}>VITAE SED CONDIMENTUM</h3>
        <time css={{ fontSize: '0.6em', margin: '-0.625em 0 1.7em 0' }}>OCTOBER 20, 2015</time>
      </div>
    </article>
  );
}

export default EventPreview;