import { addClass, removeClass } from '../../utils/dom'
import { getStyle } from '../../utils/util'

const clsName = 'qui-collapse-transition'

class Transition {
    beforeEnter (el) {
        addClass(el, clsName)
        if (!el.dataset) {
            el.dataset = {}
        }

        el.dataset.oldPaddingTop = getStyle(el, 'paddingTop')
        el.dataset.oldPaddingBottom = getStyle(el, 'paddingBottom')

        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0

    }

    enter (el) {
        el.dataset.oldOverflow = getStyle(el, 'overflow')
        el.style.height = ''
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px'
        }
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom

        el.style.overflow = 'hidden'
    }

    afterEnter (el) {
        removeClass(el, clsName)
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
    }

    beforeLeave (el) {
        if (!el.dataset) {
            el.dataset = {}
        }
        el.dataset.oldPaddingTop = getStyle(el, 'paddingTop')
        el.dataset.oldPaddingBottom = getStyle(el, 'paddingBottom')
        el.dataset.oldOverflow = getStyle(el, 'overflow')

        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
    } 

    leave (el) {
        if (el.scrollHeight !== 0) {
            addClass(el, clsName)
            el.style.height = 0
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
        }
    }

    afterLeave (el) {
        removeClass(el, clsName)
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.paddingTop
        el.style.paddingBottom = el.dataset.paddingBottom
    }
    
}

export default {
    name: 'CollapseTransition',
    functional: true,
    render(h, { children }) {
        const data = { on: new Transition() }
        return h('transition', data, children)
    }
}