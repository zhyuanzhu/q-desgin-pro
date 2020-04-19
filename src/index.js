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

import Progress from './components/progress'

import Rate from './components/rate'

import Badge from './components/badge'

import Avatar from './components/avatar'

import Circle from './components/circle'

import BackTop from './components/back-top'

import LoadingBar from './components/loading-bar'

import Carousel from './components/carousel'

import CarouselItem from './components/carousel-item'

import Drawer from './components/drawer'

import Row from './components/row'

import Col from './components/col'

import PopTip from './components/poptip'

import Tree from './components/tree'

import ToolTip from './components/tooltip'

import Tag from './components/tag'

import CollapseTransition from './components/collapse-transition'

import Collapse from './components/collapse'

import CollapseItem from './components/collapse-item'

import BreadCrumb from './components/breadcrumb'

import BreadCrumbItem from './components/breadcrumb-item'

 
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
    Upload,
    Progress,
    Rate,
    Badge,
    Avatar,
    Circle,
    BackTop,
    LoadingBar,
    Carousel,
    CarouselItem,
    Drawer,
    Row,
    Col,
    PopTip,
    Tree,
    ToolTip,
    Tag,
    CollapseTransition,
    Collapse,
    CollapseItem,
    BreadCrumb,
    BreadCrumbItem
};

const install = function (Vue, options = {}) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

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