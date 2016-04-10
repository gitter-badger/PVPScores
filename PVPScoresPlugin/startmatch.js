  function startMatch() {
if ( !isOp(player) ){
      echo( player, 'Only operators can use this command.');
      return;
    } else{
var slash = require('slash');
slash([
  'scoreboard objectives add PVPKills stat.playerKills',
  'scoreboard objectives setdisplay sidebar PVPKills',
  'broadcast A PVP match has started!'
], server);
}
