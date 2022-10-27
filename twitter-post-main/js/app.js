const textoTwitter = document.querySelector("#twitterText")
const botaoTwitter = document.querySelector("#twitterBtn")
const novo_Twitter = document.querySelector("#newTwitter")
const imageTwitter = document.querySelector("#twitterImg")

botaoTwitter.onclick = function(e){
    e.preventDefault()

    const novoTwitter = `
    <div class="post">
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@somanathg</span
                >
              </h3>
            </div>
            <div class="post__headerDescription">
              <p>${textoTwitter.value}</p>
            </div>
          </div>
          <img
            src="${imageTwitter.value}"
            alt=""
          />
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
    `;

    novo_Twitter.insertAdjacentHTML("afterbegin",novoTwitter)
    textoTwitter.value = ""
    imageTwitter.value = ""
}