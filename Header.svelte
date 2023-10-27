<header>
    {#each [0,0,0,0] as _}
        <img alt="svelte logo" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pf-5vyuj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ji7zisis4c0f4ce2cer1.png">
        <span>🥳</span>
    {/each}
</header>

<style>
	img {
		height: 100%;
	}
    header {
		position: absolute;
		height: 100px;
		width: 100%;
		color: white;
		font-size: 5em;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}
</style>