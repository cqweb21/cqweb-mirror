
// 完成回调：/api/callback
const { createVercelCompleteHandler } = require('netlify-cms-oauth-provider-node');
module.exports = createVercelCompleteHandler({}, { useEnv: true });
