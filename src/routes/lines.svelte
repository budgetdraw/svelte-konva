<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
    import Stage from '$lib/Stage.svelte'
    import Layer from '$lib/Layer.svelte'
    import Line from '$lib/Line.svelte'
    globalThis.testReady = false
</script>

<Stage width={100} height={100}>
    <Layer>
        <Line x={10} y={10} points={[0, 0, 20, 20, 20, 0]} strokeWidth={2} stroke="blue"
            on:added={ () => {
                console.log('setting test ready')
                globalThis.testReady = true
            } }
        ></Line>
    </Layer>
</Stage>
