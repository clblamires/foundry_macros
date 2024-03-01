// to add new one-liners, simply add new lines here
// use " " quotes to wrap the line, and add a comma at the end
const messages = [
  "I AM THE ALPHA NOW!",
  "Don't worry! Crying is a free action.",
  "You talk a lot of crap for someone in fireball range",
  "You see that guy? (points at Actaeon) He's gonna stab you. A lot.",
  "Alright, it's PEW PEW PEW time!",
  "Fluffy and Piddles! I CHOOSE YOU!"
];
const m = Math.floor( Math.random() * messages.length );
ChatMessage.create({
 content: messages[m]
});
