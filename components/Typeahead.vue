<template>
	<div class="typeahead">
		<div class="typeahead__toggle" ref="toggle">
			<input type="text" class="typeahead__search" ref="search">
			<span class="typeahead__text" ref="text">Sample Text</span>
		</div>
		<u class="typeahead__list">
			<li class="typeahead__item">
				<a class="typeahead__link">Test Option 1</a>
			</li>
			<li class="typeahead__item">
				<a class="typeahead__link">Test Option 2</a>
			</li>
		</u>
	</div> 
</template>

<script>
export default {
	name: 'Typeahead'
	}
</script>

<style lang="scss" scoped>

</style>