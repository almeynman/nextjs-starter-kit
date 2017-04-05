import express from 'express';
import 'isomorphic-fetch';

const url = 'https://api.rss2json.com/v1/api.json' +
            '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

const router = express.Router();

router.get('/news', (req, res) => {
  fetch(url)
    .then(response => response.json())
    .then(data => res.json(data.items));
});

export default router;
