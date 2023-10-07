document.addEventListener("DOMContentLoaded", function () {
    loadPage("page1");

    async function loadPage(pageId) {
        try {
            const response = await fetch("data/data.json");
            const data = await response.json();
            const pageData = data[pageId];

            if (pageId === "page1") {
                const { imageURL, description } = pageData.content;
                document.querySelector(".container").innerHTML = `
                <style>
                .container {
                    width: auto;
                    display: flex;
                    margin: 120px 50px;
                    justify-content: center;
                }
                
                .container.satu {
                    /* gap: 1rem; */
                    margin-bottom: 200px;
                }
                
                .atas {
                    width: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                }
                
                .atas.kiri {
                    /* background-color: aquamarine; */
                    text-align: center;
                    margin: auto;
                }
                
                .atas.kiri p {
                    font-size: large;
                    font-weight: 700;
                }
                
                .atas.kiri a {
                    text-decoration: none;
                }
                
                .atas.kiri span {
                    color: black;
                }
                
                .atas.kiri span:hover {
                    color: orange;
                }
                
                .atas.kanan a i {
                    font-size: 400%;
                    margin: 20px 5px;
                    color: black;
                }
                
                .fab.fa-github:hover {
                    color: #2D3E50;
                }
                
                .fab.fa-facebook:hover {
                    color: #3b5998;
                }
                
                .fab.fa-linkedin:hover {
                    color: #0e76a8;
                }
                
                .fab.fa-instagram:hover {
                    color: #C13584;
                }
                
                .atas.kanan {
                    /* background-color: aqua; */
                    text-align: center;
                    flex-grow: 1;
                }
                
                .atas.kanan img {
                    width:300px;
                    border-radius: 100%;
                }
                </style>
                <div class="container satu">
                <article class="atas kiri">
                  <h1 id="myText">Halo!</h1>
                  <h2 >Saya Muhammad Ilman Aqilaa</h2>
                  <p>Saya adalah mahasiswa <a href="https://www.ulbi.ac.id/" target="_blank"><span>Universitas Logistik dan Bisnis Internasional</span></a> Bandung</p>
                </article>
        
                <article id="geografis" class="atas kanan">
                  <img src="assets/image/ilman.jpg" alt="">
                </article>
              </div>
                `;
            } if (pageId === "page2") {
                document.querySelector(".container").innerHTML = `
                    <h1>${pageData.title}</h1>
                    <p>${pageData.content}</p>
                `;
            } if (pageId === "page3") {
                document.querySelector(".container").innerHTML = `
                <h1>${pageData.title}</h1>
                <p>${pageData.content}</p>
            `;
            }
        } catch (error) {
            console.error(error);
        }
    }

    const menuLinks = document.querySelectorAll(".nav-link");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageId = this.getAttribute("data-page-id");
            loadPage(pageId);
        });
    });
});
