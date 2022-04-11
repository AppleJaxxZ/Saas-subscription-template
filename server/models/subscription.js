import mongoose from 'mongoose'
import validator from 'validator'

const { Schema } = mongoose;

const subscriptionSchema = new Schema({

},
    {
        timestamps: true,
        strict: false,

    }
)



export default mongoose.model('Subscription', subscriptionSchema)