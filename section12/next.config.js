const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
      mongodb_username: 'user4',
      mongodb_password: ' 407OR0OAnHvM5lWR',
      mongodb_clustername: 'cluster0',
      mongodb_database:'AtlasA'
    },
  };
};

    return {
      env: {
      mongodb_username: 'user4',
      mongodb_password: ' 407OR0OAnHvM5lWR',
      mongodb_clustername: 'cluster0',
      mongodb_database:'AtlasApp'
    },
  };
};