async function updateLatestVideo() {
  const rssUrl = 'https://rss.1ni.co/series/401424';
  try {
    const response = await fetch(rssUrl);
    const rssText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'application/xml');
    const latestVideoLink = xmlDoc.querySelector('item link').textContent;
    const videoId = latestVideoLink.match(/sm\d+/)[0];
    document.getElementById('nico-iframe').src = `https://embed.nicovideo.jp/watch/${videoId}`;
  } catch (error) {
    console.error('Failed to fetch the latest video:', error);
  }
}

updateLatestVideo();
