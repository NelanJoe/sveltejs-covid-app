<script>
	let src = '/src/img/brand.png';
	let title = 'vaccine';
</script>

<div class="container mt-5">
	<div class="row justify-content-center gap-5">
		<div class="col-lg-5 align-self-center order-lg-1 order-2">
			<h2>Covid ID</h2>
			<p class="title">Monitoring Perkembangan Covid</p>
			<p class="sub-title">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo esse corrupti
				aliquid, deleniti aliquam exercitationem veritatis reiciendis excepturi reprehenderit
				obcaecati tempore quo eius expedita!
			</p>
			<button class="custom-btn">Vaccine</button>
		</div>
		<div class="col-lg-5 order-lg-2 order-1">
			<img {src} alt={title} />
		</div>
	</div>
</div>

<style>
	.custom-btn {
		background-color: #06d6a0;
		color: white;
		border: none;
		padding: 0.5em 4em;
		border-radius: 0.2rem;
	}

	img {
		width: 30em;
		object-fit: cover;
	}

	h2 {
		color: #06d6a0;
		font-size: 3.052rem;
	}

	.title {
		color: #118ab2;
		margin-bottom: 3rem;
	}

	.sub-title {
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 768px) {
		img {
			width: 25em;
			object-fit: cover;
		}
	}
</style>
