const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        
        await mongoose.connect(process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('Database was successfully connected!!')

    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }

}

module.exports = {
    dbConnection
}