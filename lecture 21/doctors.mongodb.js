use("HospitalDB")

db.doctors.find()

// create
// 1.insert 2.insertOne 3.insertMany
// db.Doctors.insert({
//     name:"Dr. Siya Singh",
//     specialization:"Cardiologist",
//     experience:10,
//     fees: 500,
//     salary: 1000000,
//     department: "Cardiology",
// })

// db.Doctors.insertOne({
//     name:"Dr. Siddharth Singh",
//     specialization:"neurologist",
//     experience:10,
//     fees: 10000,
//     salary: 4000000,
//     department: "neurologist",
// })

// db.Doctors.insertMany(
//     [{name:"Dr. avani Singh",
//     specialization:"neurologist",
//     experience:10,
//     fees: 10000,
//     salary: 4000000,
//     department: "neurologist",},


//     {name:"Dr. Sidhu Singh",
//     specialization:"neurologist",
//     experience:10,
//     fees: 10000,
//     salary: 4000000,
//     department: "neurologist",}]
// )


// read operation

// db.Doctors.find()
// db.Doctors.findOne()
// db.Doctors.find({name: "Dr. Siddharth Singh"})
// db.Doctors.find({department: "neurologist"})


// update operation 1.updateOne() 2. updateMany()
// db.Doctors.updateOne({name: "Dr. Siddharth Singh"},
//     {
//         $set:{
//             fees:1800,
//             experience:18
//         }
//     }
// )

// db.Doctors.updateMany(
//     {name:"Dr. Siddharth Singh"},
//     {
//         $set:{
//             fees:4500,
//             experience:31
//         }
//     }
// )

// delete operation 1. deleteOne() 2. deleteMany()

// db.doctors.deleteOne({name:"Dr. avani Singh"})


// db.doctors.deleteMany({department: "neurologist"})

// db.doctors.find(
//     {
//         department:{
//             $eq: "Cardiology"
//         }
//     }
// )

// db.doctors.find({},{name:1,department:1,_id:0})

// db.doctors.find().limit(2)

// db.doctors.find().skip(2)

db.doctors.find().sort({fees:-1})  


