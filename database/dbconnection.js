const mongoose = require('mongoose');

const DB = "mongodb+srv://srishtipooniwala28:HU2dOVo3MfegD03I@taskmanager.wha9yjp.mongodb.net/?retryWrites=true&w=majority&appName=taskManager";


mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then( ()=>{

    console.log('connection successful');

}).catch( (err)=>{

    console.log('no connection');

});

