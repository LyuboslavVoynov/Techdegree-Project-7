
// get json from /tweets and add tweets
!function () {
  $.getJSON('/tweets', function (data) {
    $('.app--tweet--list').html('');
    for(let i=0; i<data.length;i++){
        let tweetHtml = `
          <li>
            <strong class="app-tweet=timestamp">${data[i].created_at}</strong>
            <a class="app--tweet--author">
              <img class="app--avatar" src="${data[i].profile_image_url}"/>
              <h4>${data[i].name}</h4> @${data[i].screen_name}
            </a>
            <p>${data[i].text}</p>
          </li>
        `;
        let tweetsHtml = $('.app--tweet--list').html();
        tweetsHtml += tweetHtml;
        $('.app--tweet--list').html(tweetsHtml);
    }
  });
}();
