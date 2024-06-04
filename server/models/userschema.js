const mongoose = require("mongoose")
const validator = require("validator")


const user = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new ("invalid Email")
            }

        }
    },
    phone: {
        type: String,
        required: true,
        // unique: true

    },
    messages: []



})

user.methods.Messagesave = async function (message) {


    try {
        this.messages = this.messages.concat({ message })
        await this.save();
        return message

    } catch (error) {
        console.log(error)

    }
}

const users = new mongoose.model("user", user)

module.exports = users;