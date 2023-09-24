const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
      mongodb_username: 'user2',
      mongodb_password: 'XtoSsYTBK28YEEU2',
      mongodb_clustername: 'cluster0',
      mongodb_database:'AtlasApp-dev'
    },
  };
};

    return {
      env: {
      mongodb_username: 'user2',
      mongodb_password: 'XtoSsYTBK28YEEU2',
      mongodb_clustername: 'cluster0',
      mongodb_database:'AtlasApp'
    },
  };
};