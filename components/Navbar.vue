<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<nuxt-link class="navbar-brand" to="#">Nuxt App</nuxt-link>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
	  <ul class="navbar-nav">
	    <li class="nav-item active">
	      <nuxt-link to="/" class="nav-link">Home</nuxt-link>
	    </li>
	    <li class="nav-item">
	      <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
	    </li>
	    <li class="nav-item">
	      <!-- <a class="nav-link" href="#">Pricing</a> -->
	      <nuxt-link to="#" class="nav-link">Pricing</nuxt-link>
	    </li>
	    <li class="nav-item">
	      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	    </li>
	  </ul>
	</div>
	</nav>
</template>