import Button from './components/button'

import ButtonGroup from './components/button-group'

import Radio from './components/radio'

import RadioGroup  from './components/radio-group'

import CheckBox from './components/checkbox'

import Empty from './components/empty'

import Modal from './components/modal'

import Alert from './components/alert'

import Input from './components/input'

import Select from './components/select'

import DropDown from './components/dropdown'

import TextArea from './components/textarea'

import Pagination from './components/pagination'

import Loading from './components/loading'

import Steps from './components/steps'

import TimeLine from './components/timeline'

import Upload from './components/upload'

import Table from './components/table'

import qSwitch from './components/switch'

import Message from './components/message'

import Tabs from './components/tabs'

import Badge from './components/badge'

import Menu from './components/menu'

const components = {
    Button,
    ButtonGroup,
    Radio,
    RadioGroup,
    CheckBox,
    Empty,
    Modal,
    Alert,
    Input,
    Select,
    DropDown,
    TextArea,
    Pagination,
    Loading,
    Steps,
    TimeLine,
    Upload,
    Table,
    qSwitch,
    Message,
    Tabs,
    Badge,
    Menu
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