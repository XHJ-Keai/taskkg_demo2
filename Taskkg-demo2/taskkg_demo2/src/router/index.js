import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HelloWorld from '@/components/HelloWorld'
import TaskkgTool from '@/components/TaskkgTool'
import Test from '@/components/Test'
import Taskkg from '@/components/Taskkg'



Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'TaskkgTool',
      component: TaskkgTool
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Taskkg',
      name: 'Taskkg',
      component: Taskkg
    }

  ]
})
