const express = require("express");
const app = express();

app.get("/api/getVideos", (req, res) => {
  res.send(JSON.stringify(items));
});

app.get("/api/filter", (req, res) => {
  const query = req.query;
  const filteredArray = items.filter(val => val.source == query.source);

  res.send(filteredArray);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Origin"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Origin"
  );
  next();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Listening on port " + port + "...");
});

module.exports = app;

/*----------------------------------- data ------------------------------*/
const items = [
  {
    title: "How to prepare a great beer",
    type: "video",
    source: "facebook",
    videoId: "1052114818157758",
    views: 4569654
  },
  {
    type: "video",
    source: "url",
    url: "http://cdn.playbuzz.com/content/feed/video-1.mp4",
    views: 8820
  },
  {
    title: "Be a winner!",
    type: "video",
    source: "youtube",
    views: 12451409
  },
  {
    title: "The Killers - The Man (Official Music Video)",
    type: "video",
    source: "youtube",
    videoId: "w3xcybdis1k",
    views: 25560867
  },
  {
    title: "A funny dog barking",
    type: "video",
    source: "youtube",
    videoId: "MveqXxB12YA",
    views: 4287171
  }
];
