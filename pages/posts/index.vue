<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col">
				<CardList v-for="post in posts" :key="post.id" :post="post"></CardList>
			</div>
		</div>
	</div>
</template>

<script>
import CardList from '@/components/CardList'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
	components: {
		CardList
	},
	computed: {
		// allPosts() {
		// 	return this.$store.getters.posts
		// }

		...mapGetters(['posts'])
	},
	async fetch({store}) {
		let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		store.dispatch('setPosts', data)
	},
	head() {
		return {
			title: 'Nuxt App | List Of Posts'
		}
	}
}
</script>	

<style lang="scss">
	
</style>
