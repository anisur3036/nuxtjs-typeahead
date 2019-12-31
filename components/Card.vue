<template>
	<div class="container mt-4">
		<div class="card mb-2 ml-auto mr-auto">
		  <div class="card-body">
		    <h5 class="card-title">{{ post.title }}</h5>
		    <p class="card-text">{{ post.body }}</p>
		  </div>
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
