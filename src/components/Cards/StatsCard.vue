<template>
    <card>
        <div>
            <div class="row">
                <div class="col-2" v-if="$slots.header">
                    <slot name="header"></slot>
                </div>
                <div class="col-10" v-if="$slots.content">
                    <slot name="content"></slot>
                </div>
            </div>
            <div v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </card>
</template>
<script>
import Card from "./Card.vue";

export default {
	name: "stats-card",
	components: {
		Card,
	},
};
</script>
<style></style>
