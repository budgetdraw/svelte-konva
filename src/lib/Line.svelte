<script lang="ts">
    import Konva from 'konva'
    import { getContext, onMount, createEventDispatcher } from 'svelte'
    import context from './context.js'
    
    const dispatch = createEventDispatcher()

    let self : Konva.Line
    export let x : number
    export let y : number
    export let points : Array<number>
	export let stroke : string
	export let strokeWidth : number

    const parent : () => Konva.Container = getContext(context.parent)

    onMount(() => {
        self = new Konva.Line({ x, y, points, stroke, strokeWidth })
        const to = parent()
        to.add(self)
        dispatch('added', { self, to })
        return () => {
            self.destroy()
            self = null
        }
    })

    $: self && self.x(x)
    $: self && self.y(y)
    $: self && self.points(points)
    $: self && self.stroke(stroke)
    $: self && self.strokeWidth(strokeWidth)
</script>