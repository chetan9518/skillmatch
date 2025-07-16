import { createClient } from "redis";

export const redis = createClient({
    url:'redis://default:LtDIiyxED0SLwPvhi0CEngBlO8mTkovU@redis-18617.c279.us-central1-1.gce.redns.redis-cloud.com:18617'
});

(async () => {
    try{
  await redis.connect();
  console.log(' Redis connected');
    }
    catch(err:unknown){
        console.log(err)
    }
})();