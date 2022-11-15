const Role = require('../controller/role');

const roleApi = (router) => {

  // 获得所有角色列表数据
  router.get('/role/all', (req, res, next) => {
    Role.getAllList(req, res, next);
  });

  // 获得角色列表数据
  router.get('/role/list', (req, res, next) => {
    Role.getPageList(req, res, next);
  });
};

module.exports = roleApi;
