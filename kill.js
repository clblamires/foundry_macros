const kills = [
	"Killtacular",
	"Killamanjaro",
	"Killionaire",
	"Killtastrophe",
	"Killtrocity",
	"Killpocalypse",
	"Killmageddon",
	"Killsplosion",
	"Kill-a-palooza",
	"Killamity",
	"Killadelic"
];

// get a random kill from the list and send it in chat
const k = Math.floor( Math.random() * kills.length );
ChatMessage.create({
    content: "<h2>" + kills[k] + "</h2>";
});

// optional try to make a notification too?
ui.notifications.info("<h2>" + kills[k] + "</h2>");
