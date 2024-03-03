// to add new one-liners, simply add new lines here
// use " " quotes to wrap the line, and add a comma at the end
const messages = [
  "I AM THE ALPHA NOW!",
  "Oh, you do that, darling...",
  "Fireball time!",
  "You see that guy? (points at Actaeon) He's gonna stab you. A lot.",
  "Alright, it's PEW PEW PEW time!",
  "Yum yum!!!"
];
const m = Math.floor( Math.random() * messages.length );
ChatMessage.create({
 content: messages[m],
 emote: true,
 flavor: "<h4>Leef's One-Liner!</h4>"
});
