/**
 * 
 */

const RELATIVE = 'relative';
const ABSOLUTE = 'absolute';
const prefixCls = 'qui-scroll';
const TRANSLATE = 'translate(0, 0)';
let MOUSEWHEEL = () => {
    let isFF = navigator.userAgent.indexOf('Firefox') > -1;
    let mousewheel = 'mousewheel';

}
export default {
    bind (el, binding, vnode) {
        setTimeout(() => {
            let pos = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).position;
            if (!pos || pos === 'static') {
                el.style.position = RELATIVE;
                pos = RELATIVE;
            }

            if (pos === RELATIVE || pos === ABSOLUTE) {

                if (el.children && el.children.length === 1) {

                    let isFF = navigator.userAgent.indexOf('Firefox') > -1;
                    let transition = 'all .2s linear';
                    el.children[0].dataset.top = 0;
                    let div = document.createElement('div'),
                        span = document.createElement('span');
                    div.className = `${prefixCls}-box`;
                    span.className = `${prefixCls}`;
                    setTransition(el.children[0], transition);
                    setTransition(span, transition);
                    setTransition(el.children[0], TRANSLATE);
                    setTransition(span, TRANSLATE);
                    div.appendChild(span);
                    el.appendChild(div);

                    let timer = setTimeout(() => {
                        let mousewheel = 'mousewheel', dis = 30, boxH = el.clientHeight, childH = el.children[0].clientHeight;
                        if (isFF) {
                            mousewheel = 'DOMMouseScroll';
                        }
                        let barH = childH ? Math.round(boxH * boxH / childH) : 0;
                        el.children[0].dataset.top = 0;
                        el.children[0].dataset.childH = childH;
                        if (childH <= boxH) {
                            setTransform(el.children[0], TRANSLATE);
                            setTransform(span, TRANSLATE);
                            span.style.height = '0px';
                        } else {
                            span.style.height = barH + 'px';
                        }

                        el.addEventListener(mousewheel, event => {
                            let top = Number(el.children[0].dataset.top) || 0;
							let _boxH = el.clientHeight, _childH = el.children[0].clientHeight;
							let _barH = _childH ? Math.round(_boxH * _boxH / _childH) : 0;

							event.delta = (event.wheelDelta) ? parseInt(event.wheelDelta) / 120 : -(parseInt(event.detail) || 0) / 3;
							if (event.delta > 0) { // 往上滚
								let sTop = (top - dis <= 0) ? 0 : (top - dis);
								el.children[0].dataset.top = sTop;
								setTransform(el.children[0], 'translate(0,-' + sTop + 'px)');
								let y = Math.round(sTop * _barH / _boxH);
								setTransform(span, 'translate(0,' + y + 'px)');
								span.dataset.y = y;
								top = sTop;
								if (top !== 0) {
									event.preventDefault();
									event.stopPropagation()
								}
							} else if (event.delta < 0) { // 往下滚
								let sTop = (top + dis >= _childH - _boxH) ? (_childH - _boxH) : (top + dis);
								sTop += 1;
								el.children[0].dataset.top = sTop;
								setTransform(el.children[0], 'translate(0,-' + sTop + 'px)');
								let y = Math.round(sTop * _barH / _boxH);
								setTransform(span, 'translate(0,' + y + 'px)');
								span.dataset.y = y;
								top = sTop;
								if (top <= _childH - _boxH) {
									event.preventDefault();
									event.stopPropagation()
								}
							} else {
								return;
							}
                        });

                        clearTimeout(timer);
                        let none = "none";
                        let barDis = 1;

                        span.addEventListener("mousedown", mouseDown);


                        function mouseDown(e) {
							let scrollBox = el.children[0];
							let top = Number(scrollBox.dataset.top) || 0;
							let _boxH = el.clientHeight, _childH = scrollBox.clientHeight;
							let _barH = _childH ? Math.round(_boxH * _boxH / _childH) : 0;

							let ev = e || event;
							let downY = ev.clientY;
							let origY = parseFloat(span.dataset.y) || 0;
							setTransition(scrollBox, none);
							setTransition(span, none);
							setUserSelect(scrollBox, none);

							document.addEventListener("mousemove", mouseMove);
							document.addEventListener("mouseup", mouseUp);

							function mouseMove(e) {
								let ev = e || event;
								let curY = ev.clientY;
								let resY = curY - downY + origY;
								let d = _boxH - _barH + barDis;
								if (resY > d) resY = d;
								if (resY < 0) resY = 0;
								setTransform(span, 'translate(0,' + resY + 'px)');
								span.dataset.y = resY;
								let st = Math.round(resY * _childH / _boxH);
								setTransform(scrollBox, 'translate(0, ' + -st + 'px)');
								scrollBox.dataset.top = st;
							}

							function mouseUp(e) {
								setTransition(span, transition);
								setUserSelect(scrollBox, "");
								document.removeEventListener("mousemove", mouseMove);
								document.removeEventListener("mouseup", mouseUp);
							}
						}

                    });



                    function setUserSelect(ele, str) {
                        ele.style.webkitUserSelect = ele.style.msUserSelect = ele.style.userSelect = str;
                    }

                    function setTransform (ele, transform) {
                        ele.style.webkitTransform = ele.style.msTransform = ele.style.transform = transform;
                    }

                    function setTransition(ele, transition) {
                        ele.style.webkitTransition = ele.style.msTransition = ele.style.transition = transition;
                    }

                } else {
                    console.error('Threr should be only one container child element.');
                }
            } else {
                console.error('Container Element style position should be relative or absolute.');
            }




        }, 20);
    },
    inserted(el, binding, vnode) {
	},
	update(el, binding, vnode, oldVnode) {
		let isFF = navigator.userAgent.indexOf('Firefox') > -1;

		let timer = setTimeout(() => {
			let mousewheel = "mousewheel", boxH = el.clientHeight, childH = el.children[0].clientHeight;
			if (isFF) { // Firefox浏览器
				mousewheel = "DOMMouseScroll";
			}

			let barH = childH ? Math.round(boxH * boxH / childH) : 0;
            let span = el.children[1].children[0];
			let y = 0;
			if (childH <= boxH) {  // 隐藏滚动条
				span.style.height = '0px';

				el.children[0].dataset.top = 0;
				setTransform(el.children[0], TRANSLATE);
				setTransform(span, TRANSLATE);
			} else {
				// 滚动条高度变动
				span.style.height = barH + 'px';

				let oldChildH = Number(el.children[0].dataset.childH) || 0; // 老容器高度
				let oldTop = Number(el.children[0].dataset.top) || 0; // 老容器位置
				el.children[0].dataset.childH = childH;

				let changeH = childH - oldChildH; // 高度变动
				if (changeH > 0) { // 高度增加操作
					// 只需要调整滚动条位置
					y = Math.round(oldTop * barH / boxH);
					setTransform(span, 'translate(0,' + y + 'px)');
				} else {  // 高度减少操作
					if (oldTop >= childH - boxH) { // 置为底部
						el.children[0].dataset.top = childH - boxH;
						setTransform(el.children[0], 'translate(0,-' + (childH - boxH) + 'px)');
						y = (boxH - barH);
						setTransform(span, 'translate(0,' + y + 'px)');
					} else {
						y = Math.round(oldTop * barH / boxH);
						setTransform(span, 'translate(0,' + y + 'px)');
					}
				}
				span.dataset.y = y;
			}
			clearTimeout(timer);
		}, 20);


		function setTransform(ele, transform) {
			ele.style.webkitTransform = ele.style.msTransform = ele.style.transform = transform;
		}
	},
	componentUpdated(el, binding, vnode, oldVnode) {
	},
    unbind (el, binding, vnode) {
        let isFF = navigator.userAgent.indexOf('Firefox') > 1;
        let mousewheel = 'mousewheel';
        if (isFF) {
            mousewheel = 'DOMMouseScroll';
        }
        el.removeEventListener(mousewheel, (event) => {})
    }
}