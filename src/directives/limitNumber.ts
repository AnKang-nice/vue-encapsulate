export const vLimitNumber = function (el: HTMLInputElement) {
	// 只能输入数字
	el.addEventListener('input', (e: Event) => {
		const target = e.target as HTMLInputElement;
		target.value = target.value.replace(/[^0-9]/g, '');
	});
};
