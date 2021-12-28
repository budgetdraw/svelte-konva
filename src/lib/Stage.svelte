<script lang="ts">
    import Konva from 'konva'
    import { onMount, setContext } from 'svelte';
    import context from './context.js'

    export let x : number = null
    export let y : number = null
    export let width : number = null
    export let height : number = null
    export let visible : boolean = null
    export let listening : boolean = null
    export let id : string = null
    export let name : string = null
    export let opacity : number = null
    export let scale : Konva.Vector2d = { x: null, y: null }
    export let scaleX : number = null
    export let scaleY : number = null
    export let rotation : number = null
    export let offset : Konva.Vector2d = { x: null, y: null }
    export let offsetX : number = null
    export let offsetY : number = null
    export let draggable : boolean = null
    export let dragDistance : number = null
    export let dragBoundFunc : (pos: Konva.Vector2d) => Konva.Vector2d = null

    let container : HTMLDivElement
    let self : Konva.Stage

    setContext(context.stage, () => self)
    setContext(context.parent, () => self)

    onMount(() => {
        self = new Konva.Stage({
            container, x, y, width, height, visible, listening, id, name, opacity, scale, scaleX,
            scaleY, rotation, offset, offsetX, offsetY, draggable, dragDistance, dragBoundFunc
        })
        return () => {
            self.destroy()
            self = null
        }
    })

    $: self && self.x(x)
    $: self && self.y(y)
    $: self && self.width(width)
    $: self && self.height(height)
    $: self && self.visible(visible)
    $: self && self.listening(listening)
    $: self && self.id(id)
    $: self && self.name(name)
    $: self && self.opacity(opacity)
    $: self && self.scale(scale)
    $: self && self.scaleX(scaleX)
    $: self && self.scaleY(scaleY)
    $: self && self.rotation(rotation)
    $: self && self.offset(offset)
    $: self && self.offsetX(offsetX)
    $: self && self.offsetY(offsetY)
    $: self && self.draggable(draggable)
    $: self && self.dragDistance(dragDistance)
    $: self && self.dragBoundFunc(dragBoundFunc)
</script>

<div bind:this={container}>
    {#if self}
        <slot/>
    {/if}
</div>