const express = require('express');
const mongoose = require('mongoose');
const Sensor = require('./models/sensor'); // Assuming you have a sensor model defined in 'models/sensor.js'

const app = express();
const port = 3001;

// Connect to MongoDB cluster
mongoose.connect('mongodb+srv://armaan20029:Armaan12345@sit314.lx7ve5o.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/table', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'table.html'));
});

app.get('/light', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'light.html'));
});

app.get('/graph', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'graph.html'));
});

// Endpoint to receive sensor data
app.post('/sensordata', (req, res) => {
  const low = 10;
  const high = 40;
  const reading = Math.floor(Math.random() * (high - low) + low);

  const sensordata = new Sensor({
    id: 0,
    name: "lightsensor",
    address: "221 Burwood Hwy, Burwood VIC 3125",
    time: Date.now(),
    light: reading
  });

  sensordata.save()
    .then(doc => {
      console.log(doc);
      res.json({ success: true, message: 'Sensor data saved successfully.' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving sensor data.' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
