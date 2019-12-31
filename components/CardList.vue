<template>
	<div class="card mb-2 ml-auto mr-auto">
  <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p class="card-text">{{ post.body }}</p>
    <nuxt-link :to="{name: 'posts-id', params: { id: post.id }}" class="btn btn-primary btn-sm">Details</nuxt-link>
  </div>
</div>
</template>
<script>
	export default {
		props: {
			post: Object
		}
	}
</script>
