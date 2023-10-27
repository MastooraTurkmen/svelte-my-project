export default [
    {
        smileySays: 'hi! How are you?',
        buttons: [
            {value: -1, text:  'None of your business!!!'},
            {value: 0,  text: 'I am good, thanks.'}
        ]
    },
    {
        smileySays: 'how much wood would a woodchuck chuck if a woodchuck could chuck wood?',
        buttons: [
            {value: 1,  text: 'wow, that\'s a great question! :D'},
            {value: 0,  text: '4..?'}
        ]
    },
    {
        smileySays: 'which is better, Svelte or React?',
        buttons: [
            {value: 2,  text: 'Svelte is the future!'},
            {value: -1, text:  'React 4evaaaaaaaa'}
        ]
    },
    {
        smileySays: 'do you want to hear the final question?',
        buttons: [
            {value: -1, text:  'No..'},
            {value: 1,  text: 'Yeah!'}
        ]
    },
    {
        smileySays: 'do you love me?',
        buttons: [
            {value: 0,  text: 'ummmmmm......'},
            {value: 1,  text: 'I sure do!'},
            {value: -2, text: 'I definitely just hate you.'}
        ]
    },
    {
        end: {
            nice: 'I think smiley likes you.',
            neutral: 'I can\'t tell if smiley likes you..',
            mean: 'Smiley does not like you..',
        },
        buttons: [
            {value: 'reset', text: 'Reset'}
        ]
    }
];