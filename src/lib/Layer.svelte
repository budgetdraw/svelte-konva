<script lang="ts">
    import Konva from 'konva'
    import { getContext, onMount, setContext, createEventDispatcher } from 'svelte';
    import context from './context.js'
    
    const dispatch = createEventDispatcher()

    export let x : number = null
    export let y : number = null
    // width and height not support on layer, despite being in type
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

    let self : Konva.Layer

    const parent : () => Konva.Container = getContext(context.parent)
    setContext(context.parent, () => self)

    onMount(() => {
        self = new Konva.Layer({
            x, y, visible, listening, id, name, opacity, scale, scaleX,
            scaleY, rotation, offset, offsetX, offsetY, draggable, dragDistance, dragBoundFunc
        })
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

{#if self}
    <slot/>
{/if}