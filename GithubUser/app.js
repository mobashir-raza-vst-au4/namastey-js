$(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users",
        success: function (data) {
            console.log(data) //30 users
            let html = "";
            $.each(data, function (index, obj) {
                let url = obj.url;
                //ajax call
                $.ajax({
                    type: "GET",
                    url: url,
                    success: function (data2) {
                        console.log("each user data", data2)
                        data[index].userInfo = data2;

                        html += `<div class="card">
                                    <div id="profile">
                                    <img src=${obj.avatar_url} alt="" />
                                    </div>
                    
                                    <div class="user__info">
                                    <div id="name">
                                        <h1>${data2.name}</h1>
                                        <span>Learning to Learn!!</span>
                                        <ul id="list">
                                        <li>${data2.followers} Followers</li>
                                        <li>${data2.following} Following</li>
                                        <li>${data2.public_repos} Repos</li>
                                        </ul>
                                    </div>
                                    <div id="skills">
                                        <span>Python-Statics</span>
                                        <span>WhatsApp</span>
                                        <span>Blogposts</span>
                                        <span>Cpp Projects</span>
                                        <span>ML-Models</span>
                                    </div>
                                    </div>
                                </div>`;
                        $(".cards").html(html)
                    }
                })
            })

            $('#search-box').on('keyup', function () {
                const searchTerm = $(this).val();
                const filteredData = data.filter(user => user.userInfo?.name?.toLowerCase().includes(searchTerm.toLowerCase()));
                console.log("filteredData", filteredData)
                let html = '';
                $.each(filteredData, function (index, obj) {
                    // Generate HTML for each user here
                    html += `
                    <div class="card">
                    <div id="profile">
                    <img src=${obj.avatar_url} alt="" />
                    </div>
    
                    <div class="user__info">
                    <div id="name">
                        <h1>${obj.userInfo.name}</h1>
                        <span>Learning to Learn!!</span>
                        <ul id="list">
                        <li>${obj.userInfo.followers} Followers</li>
                        <li>${obj.userInfo.following} Following</li>
                        <li>${obj.userInfo.public_repos} Repos</li>
                        </ul>
                    </div>
                    <div id="skills">
                        <span>Python-Statics</span>
                        <span>WhatsApp</span>
                        <span>Blogposts</span>
                        <span>Cpp Projects</span>
                        <span>ML-Models</span>
                    </div>
                    </div>
                </div>
                    `;
                });
                $('.cards').html(html);
            });
        }
    })
})