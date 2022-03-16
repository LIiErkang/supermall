import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('views/home/Home')
	},
	{
		path: '/cart',
		component: () => import('views/cart/Cart')
	},
	{
		path: '/category',
		component: () => import('views/category/Category')
	},
	{
		path: '/detail/:iid',
		component: () => import('views/detail/Detail')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router
