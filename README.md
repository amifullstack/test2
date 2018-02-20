## React + A-Frame =  ~~Web VR~~ Awesome :)

**Quick Compatibility Check**

> Google Chrome:

    Open up Google Chrome and put chrome://gpu/ in the address bar. This will open our Chrome GPU info. It looks at your chrome version as well as your graphic hardware to determine what feature support you have. We need to see happy green words next to WebGL.

> Required Plugin:
`https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en`

To run

    

    $cd to reactboilerplate

    $npm i

    $npm run server

    And headover to http://localhost:3000/


API Structure:

    {
        "categories":[
            {
                "name": "Animals",
                "models":[
                    {
                        "url": "http://.json"
                    },
                    {
                        "url": "http://.json"
                    }
                ]
            },
            {
                "name": "Foods",
                "models":[
                    {
                        "url": "http://.json"
                    },
                    {
                        "url": "http://.json"
                    }
                ]
            }, ...

        ]
    }

db.categories.insert()