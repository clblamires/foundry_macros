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
ui.notifications.error("<h1 style='font-size: 400%;font-weight: bold; text-align:center;'>" + kills[k] + "</h1>");
