

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
            props: (route) => {
                console.log(route);
                return {
                    id: 100
                }
            }
        }
    ]
}