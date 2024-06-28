
  /**
   * Sample JavaScript code for youtube.videos.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        "Ks-_Mh1QhMc"
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
<button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button>




{
    "kind": "youtube#videoListResponse",
    "etag": "oOCJugf1sfR5SlFHDncn23-Oec0",
    "items": [
      {
        "kind": "youtube#video",
        "etag": "YxxJsNg4kskbfSc8kbpO7QrnBnk",
        "id": "Ks-_Mh1QhMc",
        "snippet": {
          "publishedAt": "2012-10-01T15:27:35Z",
          "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
          "title": "Your body language may shape who you are | Amy Cuddy | TED",
          "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "TED",
          "tags": [
            "Amy Cuddy",
            "TED",
            "TEDTalk",
            "TEDTalks",
            "TED Talk",
            "TED Talks",
            "TEDGlobal",
            "brain",
            "business",
            "psychology",
            "self",
            "success"
          ],
          "categoryId": "22",
          "liveBroadcastContent": "none",
          "defaultLanguage": "en",
          "localized": {
            "title": "Your body language may shape who you are | Amy Cuddy | TED",
            "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED"
          },
          "defaultAudioLanguage": "en"
        },
        "contentDetails": {
          "duration": "PT21M3S",
          "dimension": "2d",
          "definition": "hd",
          "caption": "true",
          "licensedContent": true,
          "contentRating": {},
          "projection": "rectangular"
        },
        "statistics": {
          "viewCount": "25044049",
          "likeCount": "439047",
          "favoriteCount": "0",
          "commentCount": "9915"
        }
      }
    ],
    "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 1
    }
  }
  