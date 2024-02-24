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
 content: "MACRO TEST / " + messages[m]
});
