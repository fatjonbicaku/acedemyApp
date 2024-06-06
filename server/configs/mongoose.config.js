const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fatjonbicaku:6MZ4hP4cny70j37i@academyapp.g3ykwtr.mongodb.net/?retryWrites=true&w=majority&appName=AcademyApp')
  .then(res => console.log("Connected to DB"))
  .catch(err => console.log(err))

