const mongoose = require('mongoose');
const uri = "mongodb+srv://usdbmjeff:4JrCckEXV2nXTuVL@cluster0.s1s11.mongodb.net/origen?retryWrites=true&w=majority";
mongoose.connect( uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});