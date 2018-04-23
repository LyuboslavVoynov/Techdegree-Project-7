
//get json from /tweets and add tweets
!function()  {
  $.getJSON('/friends', function (data) {
    $('.app--user--list').html('');
    for(let i=0; i<data.length;i++){
      if(data[i].following){
        let friendHtml = `
        <li>
          <div class="circle--fluid">
            <div class="circle--fluid--cell circle--fluid--primary">
              <a class="app--tweet--author">
                <img class="app--avatar" src="${data[i].profile_image_url}"/>
                <h4>${data[i].name}</h4>
                <p>@${data[i].screen_name}</p>
              </a>
            </div>
          </div>
        </li>
        `;
        let friendsHtml = $('.app--user--list').html();
        friendsHtml += friendHtml;
        $('.app--user--list').html(friendsHtml);
      }else {
        let friendHtml = `
        <li>
          <div class="circle--fluid">
            <div class="circle--fluid--cell circle--fluid--primary">
              <a class="app--tweet--author">
                <img class="app--avatar" src="${data[i].profile_image_url}"/>
                <h4>${data[i].name}</h4>
                <p>@${data[i].screen_name}</p>
              </a>
            </div>
            <div class="circle--fluid--cell">
              <a class="button button">Follow</a>
            </div>
          </div>
        </li>
        `;
        let friendsHtml = $('.app--user--list').html();
        friendsHtml += friendHtml;
        $('.app--user--list').html(friendsHtml);
      }
    }
  });
}();
