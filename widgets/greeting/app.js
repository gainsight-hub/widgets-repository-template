export async function init(sdk) {
  await sdk.whenReady();
  window.sdk = sdk;
  const render = (props) => {
    const card = sdk.shadowRoot.querySelector(".card");
    const titleEl = sdk.shadowRoot.querySelector("#title");
    const messageEl = sdk.shadowRoot.querySelector("#message");
    card.style.background = props.color;
    titleEl.textContent = props.title;
    messageEl.textContent = props.message;
  };
  render(sdk.getProps());
}
