import Router from 'vue-router'
import store from '@/store/'

// 首页
// --搜索观象台
const mgrObservatory = r => require(['@/pages/homePage/mgrObservatory'], r);
// 关键词管理
// --关键词库
const mgrKeyWordLibrary = r => require(['@/pages/keyWordManage/mgrKeyWordLibrary'], r);
const mgrFunKeyWord = r => require(['@/pages/keyWordManage/mgrFunKeyWord'], r);


const router = new Router({
  routes: [
    {
      name: 'index',
      redirect: {
        name: 'mgrObservatory'
      },
      path: '/'
    },
    {
      name: 'mgrObservatory',
      path: '/homePage/mgrObservatory',
      component: mgrObservatory
    },
    {
      name: 'mgrKeyWordLibrary',
      path: '/keyWordManage/mgrKeyWordLibrary',
      component: mgrKeyWordLibrary
    },
    {
      name: 'mgrFunKeyWord',
      path: '/keyWordManage/mgrFunKeyWord',
      component: mgrFunKeyWord
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // console.log(`router.beforeEach(to: `, to, `from: `, from, `next: `, next);
//   if (store.getters.user_name) {
//     return next();
//   } else {
//     return next({
//       name: 'login'
//     });
//   }
// });

export default router