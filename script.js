
const videoCardContainer = document.querySelector('.video-container')
let api_key = 'AIzaSyAQUtOA7eW9Q9Zzo57HEaFFqYSO13Ob_6U';
let video_http = 'https://www.googleapis.com/youtube/v3/videos?';
let channel_http = 'https://www.googleapis.com/youtube/v3/channels?'



fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet,contentDetails',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'

}))
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        data.items.forEach(item => {
            getChannelIcon(item)
        })
    })
    .catch(err => console.log(err))


const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet,contentDetails,statistics',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {

            if (data.items && data.items.length > 0) {
                const channelData = data.items[0];
                video_data.channelThumbnail = channelData.snippet.thumbnails.default.url;
                video_data.channelTitle = channelData.snippet.title;
                video_data.subscriberCount = channelData.statistics.subscriberCount;
                video_data.videoCount = channelData.statistics.videoCount;
                makeVideoCart(video_data);
                // console.log(video_data);
            }

        })
        .catch(err => console.log(err))
}

const makeVideoCart = (data) => {
    console.log(data)
    console.log(data.contentDetails)
    // onclick="location.href = 'http://youtube.com/watch?v=${data.id}'"
    // onclick="playVideo('${data.id}')"
    console.log(data.id.videoId)
    videoCardContainer.innerHTML += `
      <div class="video" onclick="location.href = 'http://youtube.com/watch?v=${data.id}'">
            <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${data.channelThumbnail}" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="channel-name">${data.channelTitle}</p>
                    <p class="subscriber-count">Subscribers: ${data.subscriberCount}</p>
                    <p class="video-count">Videos: ${data.videoCount}</p>
                </div>
            </div>
           
        </video>
        </div>
    `
}

const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-btn');

let searchLink = 'https://www.youtube.com/results?search_query=';

searchButton.addEventListener('click', () => {
    if (searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
})

// const playVideo = (videoId) => {
//     console.log('click')
//     console.log(videoId)

//     const existingIframe = document.querySelector('#player')

//     if (existingIframe) {
//         existingIframe.remove();
//     }


//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('id', 'player')
//     iframe.setAttribute('type', 'Text/html')
//     iframe.setAttribute('width', '640');
//     iframe.setAttribute('height', '390');
//     iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1');
//     iframe.setAttribute('frameborder', 0)
    
//     videoCardContainer.appendChild(iframe)
// }



