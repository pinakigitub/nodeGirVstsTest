var path = require('path');
var rootPath = '';
module.exports =
    {
        development:
            {
                rootPath: rootPath,
               // db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
               db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
                port: process.env.PORT || 3030,
                'secret': 'ilovescotchyscotch',
            },
        production:
            {
                rootPath: rootPath,
                db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
                port: process.env.PORT || 80,
                //port: process.env.PORT || 3030,
                'secret': 'ilovescotchyscotch',
            }
    }