import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
    const date = moment(String(value));
    if (value && date.isValid()) {
        return moment(String(value)).format('DD/MM/YYYY')
    } else {
        return '---'
    }
});
