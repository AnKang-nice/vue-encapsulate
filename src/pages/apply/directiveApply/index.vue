<template>
	<div>
		<div v-permission="'admin'">1</div>
		<div v-permission="'demo'">2</div>
		<div>{{ count }}</div>
		<el-button @click="handleClick">+</el-button>

		<el-input v-limitNumber="text" v-model="text"></el-input>

		<el-button v-copyText="text">{{ text }}</el-button>
	</div>
</template>

<script lang="ts" setup>
import { vPermission, vLimitNumber, vCopyText } from '@/directives/index';
import { ref } from 'vue';
const count = ref(1);
const handleClick = () => {
	count.value++;
};

const text = ref('1234567890');
</script>

<style></style>
