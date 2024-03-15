const roll = await new Roll("8d6").evaluate({async: true});
ChatMessage.create({
  content: `<div style="font-size: 4em; font-weight: bold; color: red; text-align: center;">FIREBALL</div><br>${roll.total} fire damage.`,
  type: CONST.CHAT_MESSAGE_TYPES.ROLL,
  roll
});
