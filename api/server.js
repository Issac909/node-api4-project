const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const jokes = [
        {
            'id': 1,
            'value': "If you accidentally sit in Chuck Norris' seat at the opera, expect to have a clarinet jammed up your ass by intermission."
        },
        {
            'id': 2,
            'value': "Miley Cyrus was inspired to do Wrecking Ball after actually swinging on one of Chuck Norris's balls."
        },
        {
            'id': 3,
            'value': "life < existence < Infinite power < God < Chuck Norris."
        },
        {
            'id': 4,
            'value': "Chuck Norris once met the sun"
        },
        {
            'id': 5,
            'value': "It isn't uncommon for grown men to wet themselves in Chuck Norris' terrifying, musk-scented presence."
        },
        {
            'id': 6,
            'value': "Once back in the 60's Chuck Norris clipped his nails, a scientist found them and reverse engineered them to make Kevlar."
        },
        {
            'id': 7,
            'value': "Chuck Norris's calendar goes from march 31 straight to april 2nd......because nobody fools Chuck Norris"
        },
        {
            'id': 8,
            'value': "Chuck Norris decided to try bull riding. He drew a nasty bull named Snort. When Snort heard Chuck was going to ride him, he went to his veterinarian, got castrated and changed his name to Daisy."
        }
    ];

    res.status(200).json(jokes)
});

module.exports = server