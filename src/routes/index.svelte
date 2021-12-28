<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
    import Stage from '$lib/Stage.svelte'
    import Layer from '$lib/Layer.svelte'
    import Line from '$lib/Line.svelte'

    let width : number
    let height : number
    let stage

    let scale = 1

    let size : number
    let x : number
    let y : number

    $: size = 100 * scale
    $: x = (width - size) / 2
    $: y = (height - size) / 2

    let strokeWidth = 10
</script>

<style>
    div {
        position: fixed;
        left: 0;
        bottom: 0;
    }
    label {
        display: block;
    }
</style>

<Stage bind:this={stage} bind:width bind:height>
    <Layer>
        <Line {x} {y} points={[0, 0, size, size]} stroke="blue" {strokeWidth}></Line>
        <Line {x} {y} points={[0, size, size, 0]} stroke="blue" {strokeWidth}></Line>
    </Layer>
</Stage>

<div>
	<label><input type="range" bind:value={scale} min={0} max={10} step={0.1} /> scale</label>
	<label><input type="range" bind:value={strokeWidth} min={0} max={100} step={1} /> stroke</label>
</div>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />