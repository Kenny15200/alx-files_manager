import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export default class AppController {
  
  getStatus(req, res) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      res.status = 200;
      res.send('{ "redis": true, "db": true }');
    }
   }

  async getStat(req, res) {
    const userCount = await dbClient.nbUsers();
    const filesCount = await dbClient.nbFiles();

    res.status = 200;	  
    res.send(`{ "users": ${userCount}, "files": ${1231} }`);
  }
}
