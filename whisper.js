let ready = false;
let users = game.users;
let options = "";
users.forEach( u => {
  options += `
      <br>
      <input type="checkbox" name="${u.id}" id="${u.id}" value="${u.name}">\n
      <label for="${u.id}">${u.name}</label>
  `;
})

new Dialog({
  title: "What do you want to whisper?",
  content: `
    Whisper To: ${options} <br>
    <label for="message">What do you want to whisper?</label>
    <textarea id="message" name="message" rows="5" cols="50" style=
"background-color:white!important;"></textarea><br>
  `,
  buttons: {
    whisper: {
      label: "Whisper",
      callback: (msg) => sendMessage(msg)
    },
    cancel: {
      label: "Cancel"  
    }
}
}).render( true );

function sendMessage( msg ){
  let targets = [];
  let messageText = "";
  for( let u of users){
    if (msg.find('[name="'+u.id+'"]')[0].checked){
      ready = true;
      targets.push( u.id );
    }
    messageText = msg.find('[name="message"]')[0].value;
  }

  if( ready ) {
    ChatMessage.create({
      content: messageText,
      whisper: targets
    });
  }
  return;

}
