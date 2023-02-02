<template>
    <div class="parent">
        <Children1></Children1>
        <Children2></Children2>
    </div>
</template>

<script>
    import Children1 from '../components/eventChild1'
    import Children2 from '../components/eventChild2'

    export default {
        name: 'Parent',
        components: {
            Children1,
            Children2
        },
        data() {
            return {
            }
        },
       
    }
</script>
