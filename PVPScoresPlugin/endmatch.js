function endMatch() {
if ( !isOp(player) ){
      echo( player, 'Only operators can use this command.');
      return;
    } else{
var slash = require('slash');
slash([
  'broadcast The PVP match is ending!',
  'scoreboard objectives remove PVPKills'
], server);
}
}