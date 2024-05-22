// server.js (exemplo com Node.js e Express)
const express = require('express');
const app = express();
const port = 3000;

const generalQuestions = [/* array de perguntas gerais */];
const technicalQuestions = [/* array de perguntas técnicas */];

app.get('/questions', (req, res) => {
    const category = req.query.category;
    if (category === 'general') {
        res.json(generalQuestions);
    } else if (category === 'technical') {
        res.json(technicalQuestions);
    } else {
        res.json([...generalQuestions, ...technicalQuestions]);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
