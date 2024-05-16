document.getElementById('searchUser').addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    getUser();
  }
});

function getUser() {
  let username = document.getElementById('searchUser').value;
  if (username !== '') {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          document.getElementById(
            'profile'
          ).innerHTML = `<h3>사용자를 찾을 수 없습니다.</h3>`;
        } else {
          document.getElementById('profile').innerHTML = `
                      <div class="user-profile">
                          <img src="${
                            data.avatar_url
                          }" alt="Profile Image" style="width: 100px; height: 100px; border-radius: 50%;">
                          <h2>${data.login}</h2>
                          <div>공개 레포지토리: ${data.public_repos}</div>
                          <div>팔로워: ${data.followers}</div>
                          <a href="${
                            data.html_url
                          }" target="_blank"><button>View Profile</button></a>
                      </div>
                      <div>회사: ${data.company || 'N/A'}</div>
                      <div>웹사이트/블로그: <a href="${
                        data.blog || '#'
                      }" target="_blank">${data.blog || 'N/A'}</a></div>
                      <div>위치: ${data.location || 'N/A'}</div>
                      <div>가입 일자: ${new Date(
                        data.created_at
                      ).toLocaleDateString('ko-KR')}</div>
                  `;
          getRepos(username);
        }
      })
      .catch((error) => console.log(error));
  }
}

function getRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      let output = '<h2>최근 레포지토리</h2>';
      repos.forEach((repo) => {
        output += `
                  <div>
                      <strong>${repo.name}</strong> - 스타: ${repo.stargazers_count}
                      <a href="${repo.html_url}" target="_blank">리포지토리 보기</a>
                  </div>
              `;
      });
      document.getElementById('repos').innerHTML = output;
    })
    .catch((error) => console.log(error));
}
