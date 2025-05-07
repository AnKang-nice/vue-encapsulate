import Clipboard from 'clipboard';
import { ElMessage } from 'element-plus';

type ClipboardElement = HTMLInputElement & {
	_clipboard?: any;
};

export const vCopyText = {
	// 在绑定元素的父组件
	// 及他自己的所有子节点都挂载完成后调用
	mounted(el: ClipboardElement, binding: any) {
		// 创建 Clipboard 实例
		const clipboard = new Clipboard(el, {
			text: () => binding.value
		});

		// 保存 clipboard 实例到元素上，方便后续清理
		el._clipboard = clipboard;

		// 成功事件监听
		clipboard.on('success', (e) => {
			ElMessage({
				message: '复制成功',
				type: 'success'
			});
			e.clearSelection();
		});

		// 失败事件监听
		clipboard.on('error', () => {
			ElMessage({
				message: '复制失败',
				type: 'error'
			});
		});
	},

	// 在绑定元素的父组件卸载前调用
	beforeUnmount(el: ClipboardElement) {
		// 清理 clipboard 实例
		if (el._clipboard) {
			el._clipboard.destroy();
			delete el._clipboard;
		}
	},

	// 在绑定元素的值更新时调用
	updated(el: ClipboardElement, binding: any) {
		// 如果值发生变化，更新 clipboard 实例
		if (el._clipboard) {
			el._clipboard.text = () => binding.value;
		}
	}
};
