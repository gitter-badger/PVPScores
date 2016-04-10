 function resetScores() {
if ( !isOp(player) ){
      echo( player, 'Only operators can use this command.');
      return;
    } else{
var slash = require('slash');
slash([
  'broadcast All your PVP kill scores will be reset!',
  'scoreboard objectives remove PVPKills',
  'scoreboard objectives add PVPKills stat.playerKills',
  scoreboard objectives setdisplay sidebar PVPKills'
], server);
}
}
