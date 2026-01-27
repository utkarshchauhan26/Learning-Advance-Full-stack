const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Storage: array for notes
let notes = [];
let idCounter = 1;  // For generating IDs

// Existing routes
app.get('/', (req, res) => {
  res.send('server is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// POST /notes - Create a new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  
  // Validate: check if title and content are provided
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  // Create note with generated ID
  const newNote = { id: idCounter++, title, content };
  notes.push(newNote);
  
  // Return 201 with the created note
  res.status(201).json(newNote);
});

// GET /notes - Get all notes
app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

// GET /notes/:id - Get a single note by ID
app.get('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  
  res.status(200).json(note);
});

// DELETE /notes/:id - Delete a note by ID
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex(n => n.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }
  
  notes.splice(index, 1);
  res.status(200).json({ message: 'Note deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('server is running on port 3000');
});