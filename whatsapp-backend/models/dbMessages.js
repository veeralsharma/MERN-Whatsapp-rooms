const mongoose = require("mongoose");

const whatsappBody = {
  message:{
    type: String,
  },
  name:{
    type: String,
  },
  timestamp: {
    type: String,
  },
  recieved:{
      type:Boolean
  }
};
const whatsappSchema = mongoose.Schema(whatsappBody);

const Messages = mongoose.model("Messages", whatsappSchema);

module.exports = Messages;
