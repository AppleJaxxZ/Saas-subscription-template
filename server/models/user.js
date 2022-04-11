import mongoose from 'mongoose'
import validator from 'validator'
import { validateDate } from './customValidation';
const { Schema } = mongoose;
const customDateValidator = [validateDate, "Please enter a validate date of birth in mm/dd/yyy format including the slashes."];

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(
                    "Email is invalid.  Please enter a valid email address."

                );
            }
        },
        dateOfBirth: {
            type: String,
            required: true,
            minlength: 10,
            maxLength: 10,
            validate: customDateValidator,
        },

    },
    phoneNumber: {
        type: String,
        required: [true, "User phone number required"],
        minLength: 11,
        maxLength: 11
    },

    pinNumber: {
        type: String,
        required: true,
        minlength: 7,
        maxLength: 7,
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    stripe_customer_id: String,
    subscriptions: [],
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //             required: true,
    //         },
    //     },
    // ],
},
    {
        timestamps: true,

    }
)


// userSchema.methods.generateAuthToken = async function () {
//     const user = this;
//     const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

//     user.tokens = user.tokens.concat({ token });
//     await user.save();
//     return token;

// }
export default mongoose.model('User', userSchema)