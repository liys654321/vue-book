<template>

    <div>

        <h2>{{this.$store.state.count}}</h2>
        <div>

            <button @click="handleAddClick(10)">增加</button>
            <button @click="handleReduceClick(10)">减少</button>

        </div>

    </div>

</template>
<script>

		export default {

            data() {

                    return {}
            },
            methods: {
                handleAddClick(n) {
                        this.$store.commit('mutatinosAddCount',n);
                },
                handleReduceClick(n) {
                		this.$store.commit('mutainosReduceCount',n);
                }

            }
		}
</script>
<style>

</style>
