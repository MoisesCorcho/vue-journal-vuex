
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //15648321153
            date: new Date().toDateString(), // sat 23, julio
            text: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
            picture: null
        },
        {
            id: new Date().getTime() + 1000, //15648321153
            date: new Date().toDateString(), // sat 23, julio
            text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, //15648321153
            date: new Date().toDateString(), // sat 23, julio
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi, fames parturient cubilia etiam leo eleifend consequat tincidunt lobortis, ut nullam morbi dictumst commodo ac proin. Conubia tempor sociosqu integer senectus per facilisis taciti venenatis',
            picture: null
        }
    ]
})