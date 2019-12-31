<template>
	<div>
		<Card :post="post"></Card>
	</div>
</template>
<script>
	import axios from 'axios'
	import Card from '@/components/Card'

	export default {
		components: {
			Card
		},
		data() {
			return {
				post: ''
			}
		},
		async asyncData(context) {
			let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
			return { post: data }
		},
		head() {
			return {
				title: 'Nuxt App | ' + this.post.title
			}
		}
	}
</script>