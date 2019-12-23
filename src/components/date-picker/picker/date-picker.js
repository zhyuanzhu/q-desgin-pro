import Picker from '../picker.vue';
import DatePickerPanel from '../panel/Date/date.vue';
import RangeDatePickerPanel from '../panel/Date/date-range.vue';

import { hasParam } from '../../../utils/util';

export default {
    name: 'CalendarPicker',
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return hasParam(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
    },
    components: { DatePickerPanel, RangeDatePickerPanel },
    computed: {
        panel(){
            const isRange =  this.type === 'daterange' || this.type === 'datetimerange';
            return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel';
        },
        ownPickerProps(){
            return this.options;
        }
    },
};
