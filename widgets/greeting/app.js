export async function init(sdk) {
  await sdk.whenReady();
  const render = (props) => {
    const card = sdk.shadowRoot.querySelector(".card");
    const titleEl = sdk.shadowRoot.querySelector("#title");
    const messageEl = sdk.shadowRoot.querySelector("#message");
    card.style.background = props.color;
    titleEl.textContent = props.title;
    messageEl.textContent = props.message;
    console.log("elo", document.querySelector(".card"));
  };
  render(sdk.getProps());
  // sdk.on('propsChanged', render)
  sdk.on("destroy", () => {
    sdk.shadowRoot.querySelector(".card").innerHTML = "";
  });
}
