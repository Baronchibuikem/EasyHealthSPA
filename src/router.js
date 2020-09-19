/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import store from "./store/store";

const Home = () => import('./components/pages/utilities/Home.vue')
const About = () => import('./components/pages/utilities/About.vue')
const Login = () => import('./components/pages/auth/Login.vue')
const Signup = () => import('./components/pages/auth/Signup.vue')
const AddService = () => import('./components/pages/auth/AddService.vue')
const Profile = () => import('./components/pages/profiles/Profile.vue')
const NotFound = () => import('./components/pages/utilities/404.vue')
const Settings = () => import('./components/pages/settings/Settings.vue')
const ProfileSettings = () => import('./components/pages/settings/Profile.vue')
const Notification = () => import('./components/pages/settings/Notification.vue')
const Account = () => import('./components/pages/settings/Account.vue')
const Password = () => import('./components/pages/settings/Password.vue')
const PrivacySettings = () => import('./components/pages/settings/PrivacySettings.vue')
const Search = () => import('./components/pages/utilities/Search.vue')
const Dashboard = () => import('./components/pages/dashboard/Dashboard')


Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/addservice',
      name: 'addservice',
      component: AddService
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        requiresAuth: true
      },
      children: [{
          path: '/',
          name: 'profileSettings',
          component: ProfileSettings,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'notification',
          name: 'notification',
          component: Notification,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'password',
          name: 'password',
          component: Password,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'privacy',
          name: 'privacysettings',
          component: PrivacySettings,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/:username',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/404'
    },
    
  ]
})
// Used to check if a route is projected, if it is then you are required to
// be authenticated before you can access it
router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.loggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});