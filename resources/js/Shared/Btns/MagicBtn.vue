<template>
    <div :class="className">
        <span>{{ text }}</span>
    </div>
</template>

<script>
    export default {
        name: "MagicBtn",
        props: ['text', 'className'],
        methods: {
            setListener(btn) {
                if (btn) {
                    btn.onmousemove = (e) => {
                        const x = e.pageX - e.target.offsetLeft
                        const y = e.pageY - e.target.offsetTop

                        e.target.style.setProperty('--x', `${ x }px`)
                        e.target.style.setProperty('--y', `${ y }px`)
                    }
                }
            }
        },
        mounted() {
            let btn = this.$el;

            this.setListener(btn);
        }
    }
</script>
