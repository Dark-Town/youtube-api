const express = require('express');
const ytdl = require('ytdl-core');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.YT_API_KEY;

if (!apiKey) {
  throw new Error('Missing YT_API_KEY');
}

const youtube = google.youtube({
  version: 'v3',
  auth: apiKey
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { videos: null });
});

app.post('/search', async (req, res) => {
  const query = req.body.query;
  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q: query,
      maxResults: 5,
      type: 'video'
    });
    res.render('index', { videos: response.data.items });
  } catch (err) {
    console.error('Search Error:', err);
    res.send('Error searching YouTube');
  }
});

app.get('/download', (req, res) => {
  const videoId = req.query.videoId;
  if (!ytdl.validateID(videoId)) return res.status(400).send('Invalid video ID');

  const url = `https://www.youtube.com/watch?v=${videoId}`;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(url, { format: 'mp4' }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
