(() => {
  const jsonUrl = "https://raw.githubusercontent.com/your-username/your-repo/main/stickers.json";

  let allStickers = [];
  let dialog;

  // fetch stickers, render the dialog
  async function loadStickers() {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) throw new Error(`Failed to fetch stickers: ${response.statusText}`);
      
      const data = await response.json();
      allStickers = data.stickers;
      renderDialog(allStickers);
    } catch (error) {
      console.error(error);
      ui.notifications.error("Stickers didn't load. Check the console, and let Leef know!");
    }
  }

  // create the search bar at the top
  function createSearchBar() {
    return `
      <div style="margin-bottom: 10px;">
        <input id="sticker-search" type="text" placeholder="Search stickers..." 
          style="width: 100%; padding: 5px; font-size: 1em;"/>
      </div>`;
  }

  // show grid of stickers
  function createGrid(stickers) {
    const sticker_url = "https://raw.githubusercontent.com/clblamires/foundry_macros/refs/heads/main/stickers/";
    if (stickers.length === 0) {
      return '<p style="text-align: center; font-style: italic;">No stickers found.</p>';
    }

    let content = '<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px;">';
    stickers.forEach(({ url, title }) => {
      let fullUrl = sticker_url + url;
      content += `<div style="text-align: center;">
                    <img src="${fullUrl}" style="max-width: 100%; height: auto; cursor: pointer;" onclick="sendToChat('${fullUrl}')" />
                    <div style="font-size: 0.9em; margin-top: 5px;">${title}</div>
                  </div>`;
    });
    content += "</div>";
    return content;
  }

  // filter system
  function filterStickers(query) {
    query = query.toLowerCase();
    return allStickers.filter(({ title, tags }) => {
      return (
        title.toLowerCase().includes(query) ||
        tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }

  // search event handler (i.e. when the user types in something)
  function handleSearch(event) {
    const query = event.target.value;
    const filteredStickers = filterStickers(query);
    const content = createSearchBar() + createGrid(filteredStickers);
    dialog.data.content = content;
    dialog.render(true);
  }

  // send the sticker to chat
  window.sendToChat = function (imageUrl) {
    const content = `<img src="${imageUrl}" style="max-width: 100px; height: auto;" />`;
    ChatMessage.create({
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: content,
    });
    if (dialog) dialog.close();
  };

  // render the dialog box
  function renderDialog(stickers) {
    const content = createSearchBar() + createGrid(stickers);

    dialog = new Dialog({
      title: "Emotes",
      content: content,
      buttons: {
        close: {
          label: "Close",
          callback: () => console.log("Dialog closed."),
        },
      },
      render: (html) => {
        html.closest(".dialog").css({
          width: "800px",
          height: "600px",
        });

        // Add search input listener
        html.find("#sticker-search").on("input", handleSearch);
      },
    });

    dialog.render(true);
  }

  // load all stickers! :)
  loadStickers();
})();
