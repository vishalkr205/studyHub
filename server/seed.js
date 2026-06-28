require("dotenv").config();
const dns = require("dns");
//google dns
dns.setServers(["8.8.8.8","8.8.4.4"]);

const mongoose = require("mongoose");

const Subject = require("./models/Subject");
const Chapter = require("./models/Chapter");
const User = require("./models/User");
const Note = require("./models/Note");

const connectDB = async()=>{
    await
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
};
const seedData = async () => {
    try {
    await connectDB();

    // Clear old data
    await Subject.deleteMany();
    await Chapter.deleteMany();
    await Note.deleteMany();

    // Create Subjects
    const physics = await Subject.create({ name: "Physics" });
    const chemistry = await Subject.create({ name: "Chemistry" });
    const biology = await Subject.create({ name: "Biology" });

    // Create Chapters
    await Chapter.create([
  // =========================
  // PHYSICS (Class 11)
  // =========================

  { name: "Units and Measurements", subject: physics._id },
  { name: "Motion in a Straight Line", subject: physics._id },
  { name: "Motion in a Plane", subject: physics._id },
  { name: "Laws of Motion", subject: physics._id },
  { name: "Work, Energy and Power", subject: physics._id },
  { name: "System of Particles and Rotational Motion", subject: physics._id },
  { name: "Gravitation", subject: physics._id },
  { name: "Mechanical Properties of Solids", subject: physics._id },
  { name: "Mechanical Properties of Fluids", subject: physics._id },
  { name: "Thermal Properties of Matter", subject: physics._id },
  { name: "Thermodynamics", subject: physics._id },
  { name: "Kinetic Theory", subject: physics._id },
  { name: "Oscillations", subject: physics._id },
  { name: "Waves", subject: physics._id },

  // =========================
  // CHEMISTRY (Class 11)
  // =========================
  { name: "Some Basic Concepts of Chemistry", subject: chemistry._id },
  { name: "Structure of Atom", subject: chemistry._id },
  { name: "Classification of Elements and Periodicity in Properties", subject: chemistry._id },
  { name: "Chemical Bonding and Molecular Structure", subject: chemistry._id },
  { name: "States of Matter", subject: chemistry._id },
  { name: "Thermodynamics", subject: chemistry._id },
  { name: "Equilibrium", subject: chemistry._id },
  { name: "Redox Reactions", subject: chemistry._id },
  { name: "Hydrogen", subject: chemistry._id },
  { name: "The s-Block Element", subject: chemistry._id },
  { name: "The p-Block Elements", subject: chemistry._id },
  { name: "Organic Chemistry - Some Basic Principles and Techniques", subject: chemistry._id },
  { name: "Hydrocarbons", subject: chemistry._id },
  { name: "Environmental Chemistry", subject: chemistry._id },

  // =========================
  // BIOLOGY (Class 11)
  // =========================
  { name: "The Living World", subject: biology._id },
  { name: "Biological Classification", subject: biology._id },
  { name: "Plant Kingdom", subject: biology._id },
  { name: "Animal Kingdom", subject: biology._id },
  { name: "Morphology of Flowering Plants", subject: biology._id },
  { name: "Anatomy of Flowering Plants", subject: biology._id },
  { name: "Structural Organisation in Animals", subject: biology._id },
  { name: "Cell: The Unit of Life", subject: biology._id },
  { name: "Biomolecules", subject: biology._id },
  { name: "Cell Cycle and Cell Division", subject: biology._id },
  { name: "Transport in Plants", subject: biology._id },
  { name: "Mineral Nutrition", subject: biology._id },
  { name: "Photosynthesis in Higher Plants", subject: biology._id },
  { name: "Respiration in Plants", subject: biology._id },
  { name: "Plant Growth and Development", subject: biology._id },
  { name: "Digestion and Absorption", subject: biology._id },
  { name: "Breathing and Exchange of Gases", subject: biology._id },
  { name: "Body Fluids and Circulation", subject: biology._id },
  { name: "Excretory Products and their Elimination", subject: biology._id },
  { name: "Locomotion and Movement", subject: biology._id },
  { name: "Neural Control and Coordination", subject: biology._id },
  { name: "Chemical Coordination and Integration", subject: biology._id },
]);

    console.log("✅ Sample data inserted successfully!");

    process.exit();
    } catch (error) {
    console.log(error);
    process.exit(1);
    }
};
await Question.create({
  chapter: chapterId,
  question: "SI unit of Force is?",
  options: ["Newton", "Joule", "Watt", "Pascal"],
  correctAnswer: 0,
  explanation: "Force ki SI unit Newton hoti hai.",
});

seedData();