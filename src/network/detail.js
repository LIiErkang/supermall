import { request } from './request'

export function getDetailData(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

export class BaseInfo {
	constructor(itemInfo, columns, shopInfo) {
		this.desc = itemInfo.discountDesc
		this.realPrice = itemInfo.lowNowPrice
		this.oldPrice = itemInfo.lowPrice
		this.title = itemInfo.title
		this.columns = columns
		this.services = shopInfo.services
	}
}

export class ShopInfo {
	constructor(shopInfo) {
		this.name = shopInfo.name
		this.score = shopInfo.score
		this.logo = shopInfo.shopLogo
		this.sell = shopInfo.cSells
		this.goods = shopInfo.cGoods
	}
}
