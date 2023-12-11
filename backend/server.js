const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://user123:password908503@cluster0.ar2tt4t.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const uri = 'mongodb+srv://user123:password908503@cluster0.ar2tt4t.mongodb.net/'

const db = mongoose
  .connect(uri)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("connection not successful");
  });

const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phoneNumber: String,
});

const Form = mongoose.model('Form', formSchema);

app.post('/registerdata', async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, address, city, state, zip, phoneNumber } = req.body;
        const formData = new Form({ firstName, lastName, email, password, confirmPassword, address, city, state, zip, phoneNumber });
        await formData.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Form submission failed' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
