import Router from "vue-router"
import Vue from "vue"
import navConfig from '../nav.config.json';
import hljs from 'highlight.js';
Vue.use(Router)
const load = function (name) {
  return (resolve) => require([`../pages/${name}.vue`], resolve) 
};


const loadDocs = function (name) {
  return (resolve) => require([`../docs${name}.md`], resolve) 
};

const registerRoute = (navConfig) => {
  let route = [];
  let navs = navConfig;
  route.push({
    path: `/component`,
    redirect: `/component/installation`,
    component: load('component'),
    children: []
  });
  navs.forEach((nav, index) => {
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav, index);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav, index);
      });
    } else {
      addRoute(nav, index);
    }
  });

  function addRoute(page, index) {
    const component = page.path === '/changelog' ?
      load('changelog') :
      loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };

    route[0].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);



// route.push({
//   path: '/play',
//   name: 'play',
//   component: require('./play/index.vue')
// });


route = route.concat([
  {
    path: '/',
    components: require(`../pages/index.vue`)
  },
  {
    path: '/guide',
    name: "component-guide",
    components: require(`../pages/guide.vue`)
  }
]);

const router = new Router({
  routes: route
})


router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
export default router