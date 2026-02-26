export async function init(sdk) {
  console.log('[greeting] init called', sdk);
  await sdk.whenReady();
  console.log('[greeting] sdk ready');
  const render = (props) => {
    console.log('[greeting] render called with props', props);
    const card = sdk.$('.card');
    const titleEl = sdk.$('#title');
    const messageEl = sdk.$('#message');
    console.log('[greeting] DOM elements', { card, titleEl, messageEl });
    if (!card || !titleEl || !messageEl) {
      console.error('[greeting] DOM elements not found — sdk.$ may not be querying shadow DOM correctly');
      return;
    }
    card.style.background = props.color;
    titleEl.textContent = props.title;
    messageEl.textContent = props.message;
    console.log('[greeting] render complete');
  };
  const props = sdk.getProps();
  console.log('[greeting] initial props', props);
  render(props);
  sdk.on('propsChanged', render);
  sdk.on('destroy', () => {
    console.log('[greeting] destroy called');
    sdk.$('.card').innerHTML = '';
  });
}
