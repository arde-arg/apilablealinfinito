<template>
	<button
		class="button"
		:class="color"
		:disabled="disabled"
		:type="type">
		<slot name="button"></slot>
	</button>
</template>
<script>
export default{
	name: 'button-layout',
	props: {
		color: {
			type: String,
			default: 'linear white'
		},
		type: {
			type: String,
			default: ''
		},
		disabled: {}
	}
}
</script>
<style scoped>
button {
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	line-height: 1.2rem;
	margin: 25px 0 0;
	padding: 10px 20px;
	position: relative;
	transition: all 1s;
}
button.linear.white {
	background: transparent;
	border: solid 1px #fff;
	color: #fff;
}
	button.linear.white:hover {
		background: #fff;
		color: #FF4C3A;
	}
</style>