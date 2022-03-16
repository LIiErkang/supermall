<template>
	<div ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
	import Scroll from 'better-scroll'
	export default {
		props: {
			probeType: {
				type: Number,
				default () { return 0 }
			},
			pullUpLoad: {
				type: Boolean,
				default () { return false }
			},
		},
		data () { return { scroll: null } },
		mounted () {
			this.scroll = new Scroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})
			this.scroll.on('scroll', position => this.$emit('scroll', position))
			this.scroll.on('pullingUp', () => this.$emit('pullingUp'))
		},
		methods: {
			finish () { this.scroll && this.scroll.finishPullUp() },
			refresh () { this.scroll && this.scroll.refresh() },
			scrollTo (x, y, time = 500) { this.scroll && this.scroll.scrollTo(x, y, time) }
		}
	}
</script>