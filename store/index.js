export const state = () => ({
	posts: {},
	post: {}
});


// getters

export const getters = {
	posts(state) {
		return state.posts
	}
}

//mutations
export const mutations = {
	SET_POSTS(state, posts) {
		state.posts = posts
	},

	SET_POST(state, post) {
		state.post = post
	}
}


//actions
export const actions = {
	setPosts({ commit }, posts) {
		commit("SET_POSTS", posts);
	},

	setPost({ commit }, post) {
		commit("SET_POST", post);
	}
}