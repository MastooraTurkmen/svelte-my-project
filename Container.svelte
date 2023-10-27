<div class="Container">
    <slot></slot>
</div>

<style>
	.Container {
		height: 100vh;
		width: 100vw;
		font-family: 'Nunito', sans-serif;
		border: solid  #40b3ff 20px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>