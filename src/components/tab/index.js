import Tab from './tab'
import TabItem from './tabItem'

export default {
    install(Vue) {
        Vue.component('tab', Tab);
        Vue.component('TabItem', TabItem);
    },
};

export  {
    Tab,
    TabItem
}
