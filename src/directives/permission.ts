// 模拟权限列表
const permissions = ['admin', 'user'];

export const vPermission = {
	mounted(el: HTMLInputElement, binding: any) {
		console.log(binding);
		const { value } = binding;
		if (!permissions.includes(value)) {
			el.parentNode && el.parentNode.removeChild(el);
		}
	}
};
