// Foundry Emotes Dialog

(() => {

  // Images are stored on imgur
  let imageUrls = [
    "https://i.imgur.com/sjJlbcE.png",
    "https://i.imgur.com/OgcqMUM.png",
    "https://i.imgur.com/QAdz7hB.png",
    "https://i.imgur.com/Cxzl7fY.png",
    "https://i.imgur.com/mxLpiUC.png",
    "https://i.imgur.com/ioefsge.png",
    "https://i.imgur.com/gq24K1R.png",
  ];

  // dialog box for showing all the emotes
  let dialog;

  
  // create the grid of emotes
  function createGrid(imageUrls) {
    let content = '<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 5px;">';
    imageUrls.forEach((url) => {
      content += `<div style="text-align: center;">
                    <img src="${url}" style="max-width: 100%; height: auto; cursor: pointer;" onclick="sendToChat('${url}')" />
                  </div>`;
    });
    content += "</div>";
    return content;
  }
  let content = createGrid(imageUrls);

  // send image to chat
  window.sendToChat = function (imageUrl) {
    // NOTE: 100px is the current size of the image. Set this lower if you want the emote to be smaller.
    let content = `<img src="${imageUrl}" style="max-width: 100px; height: auto;" />`;
    ChatMessage.create({
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: content,
    });
    dialog.close();
  };

  

  dialog = new Dialog({
    title: "Emotes",
    content: content,
    buttons: {
      ok: {
        label: "OK",
        callback: () => console.log("Images displayed."),
      },
    },
    render: (html) => {
      html.closest(".dialog").css({
        width: "800px",
        height: "600px",
      });
    },
  });

  dialog.render(true);
})();
