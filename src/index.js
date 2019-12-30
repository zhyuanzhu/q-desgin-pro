// export component
import Alert from './components/alert'

import Button from './components/button'

import ButtonGroup from './components/button-group'

import Checkbox from  './components/checkbox'

import DatePicker from './components/date-picker'

import DropDown  from './components/dropdown'

import Empty from './components/empty'

import Icon from './components/icon'

import Input from './components/icon'

import Loading from './components/loading'

import Menu from './components/menu'

import Message from './components/message'

import Modal from './components/modal'

import Option from './components/option'

import Pagination from './components/pagination'

import Radio from './components/radio'

import RadioGroup from './components/radio-group'

import Select from './components/select'

import Steps from './components/steps'

import qSwitch from './components/switch'

import Table from './components/table'

import Tabs from './components/tabs'

import Textarea from './components/textarea'

import Timeline from './components/timeline'

import Upload from './components/upload'


const components = {
    Alert,
    Button,
    ButtonGroup,
    Checkbox,
    DatePicker,
    DropDown,
    Empty,
    Icon,
    Input,
    Loading,
    Menu,
    Message,
    Modal,
    Option,
    Pagination,
    Radio,
    RadioGroup,
    Select,
    Steps,
    qSwitch,
    Table,
    Tabs,
    Textarea,
    Timeline,
    Upload
};

const install = function (Vue, options = {}) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.prototype.$Message = Message;
    Vue.prototype.$Alert = Modal;

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

module.exports.default = module.exports = API;