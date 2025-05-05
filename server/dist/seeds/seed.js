import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Support __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Read and parse the questions manually
const filePath = path.join(__dirname, 'pythonQuestions.json');
const questionData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
try {
    await db();
    await cleanDB();
    await Question.insertMany(questionData);
    console.log('✅ Seeding completed successfully!');
    process.exit(0);
}
catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
}
