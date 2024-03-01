let ready = false;
let users = game.users//.filter( user => user.active );
let ops = ""; // default none
let playerTokenIDs = users.map( u => u.character?.id).filter( id => id !== undefined ); // get user token IDs, but only for characters on the screen
let selectedPlayerIDs = canvas.tokens.controlled.map( token => {
  if( playerTokenIDs.includes(token.actor.id)){
    return token.actor.id;
  }
})

users.forEach( u => {
  ops += `
      <br>
      <input type="checkbox" name="${u.id}" id="${u.id}" value="${u.name}">\n
      <label for="${u.id}">${u.name}</label>
  `;
})

new Dialog({
  title: "Whisper to Other Players",
  content: `
    Whisper To: ${ops} <br>
    <label for="message">What do you want to whisper?</label>
    <textarea id="message" name="message" rows="5" cols="50"></textarea><br>
  `,
  buttons: {
    whisper: {
      label: "Whisper",
      callback: (msg) => sendMessage(msg)
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
