document.addEventListener("DOMContentLoaded", function () {
    loadPage("page1");

    async function loadPage(pageId) {
        try {
            const response = await fetch("data/data.json");
            const data = await response.json();
            const pageData = data[pageId];

            if (pageId === "page1") {
                const { imageURL, description } = pageData.content1;
                const { imageURL2, description2, title2 } = pageData.content2;
                const { imageURL3, description3, title3 } = pageData.content3;
                document.querySelector(".container").innerHTML = `
                <style>
                    .content {
                        margin: 0px 10px;
                    }

                    .row {
                        margin-top: 130px;
                        margin-bottom: 200px;
                    }
                    
                    #image-space {
                        padding: 10px 50px;
                    }

                    #text-space {
                        padding: 10px 10px
                    }

                    @media screen and (max-width: 760px) {
                        .row {
                            margin-top: 90px;
                            margin-bottom: 150px;
                        }

                        #reverse {
                            flex-direction: column-reverse;
                        }

                        #text-space {
                            padding: 10px 20px
                        }
                    }
                </style>
                <div class="content">
                        <div class="row align-items-center shadow rounded">
                            <div id="image-space"  class="col-md-6">
                                <img src="${imageURL}" alt="Gambar Perkenalan" class="img-fluid">
                            </div>
                            <div id="text-space" class="col-md-6">
                                <h1>${pageData.title}</h1>
                                <p>${description}</p>
                            </div>
                        </div>

                        <div id="reverse" class="row text align-items-center shadow rounded">
                            <div id="text-space" class="col-md-6">
                                <h1>${title2}</h1>
                                <p>${description2}*</p>
                                <p style="font-size: x-small;">*${pageData.note}</p>
                            </div>
                            <div id="image-space" class="col-md-6">
                                <img src="${imageURL2}" alt="Gambar Perkenalan" class="img-fluid">
                            </div>
                        </div>  

                        <div class="row align-items-center shadow rounded">
                            <div id="image-space"  class="col-md-6">
                                <img src="${imageURL3}" alt="Gambar Perkenalan" class="img-fluid">
                            </div>
                            <div id="text-space" class="col-md-6">
                                <h1>${title3}</h1>
                                <p>${description3}</p>
                                <p style="font-size: x-small;">*${pageData.note}</p>
                            </div>
                        </div>
                </div>
                `;
            } if (pageId === "page2") {
                const { imageURL, deskripsi, deskripsii, deskripsiii, title } = pageData.content1;
                const { imageURL2, deskripsi2, title2 } = pageData.content2;
                const { imageURL3, problem, title3 } = pageData.content3;
                const { imageURL4, solving, title4 } = pageData.content4;
                document.querySelector(".container").innerHTML = `
                <style>
                    .content {
                        margin: 0px 200px;
                    }

                    h2{
                        text-align: center; 
                    }

                    P {
                        text-align: justify;
                    }

                    i {
                        font-size: 50px;

                    }

                    img {
                        margin: 50px auto; /* Menggunakan 'auto' untuk memposisikan gambar di tengah secara horizontal */
                        display: block; /* Untuk menghilangkan margin tambahan yang mungkin muncul */
                        width: 50%;
                    }

                    .row {
                        margin-top: 130px;
                        margin-bottom: 200px;
                    }

                    .tujuan-center p{
                        text-align: center; 
                    }

                    #text-space {
                        padding: 20px 100px
                    }

                    #img-size {
                        width: 10%;
                    }

                    @media screen and (max-width: 760px) {
                        .content {
                            margin: 0px 10px;
                        }

                        .row {
                            margin-top: 90px;
                            margin-bottom: 150px;
                        }

                        #text-space {
                            padding: 20px 20px
                        }

                        h2{
                            font-size: medium;
                        }
                    }
                </style>
                <div class="content">
                        <div class="row align-items-center shadow rounded">
                            <div class="p-4">
                                    <h2>${title}</h2>
                                    <img src="assets/image/ulbi.png" alt="Gambar Perkenalan" class="img-fluid">
                                    <div class="tujuan-center">
                                        <p>${deskripsi}</p>
                                        <p>${deskripsii}</p>
                                        <p>${deskripsiii}</p>
                                    </div>
                            </div>
                        </div>

                        <div class="row text align-items-center shadow rounded">
                            <div class="p-4">
                                    <h2>${title2}</h2>
                                    <hr>
                                    <img id="img-size" src="assets/image/store-solid.svg" alt="Gambar Perkenalan" class="img-fluid">
                                    <p>${deskripsi2}</p>
                            </div>
                        </div>  

                        <div class="row align-items-center shadow rounded">
                            <div  class="p-4">
                                    <h2>${title3}</h2>
                                    <hr>
                                    <p>${problem}</p>
                            </div>
                        </div>

                        <div class="row align-items-center shadow rounded">
                        <div class="p-4">
                                <h2>${title4}</h2>
                                <hr>
                                <p>${solving}</p>
                        </div>
                    </div>
                </div>
                `;
            } if (pageId === "page4") {
                document.querySelector(".container").innerHTML = `
                <style>
                .container {
                    width: auto;
                    display: flex;
                    margin: 60px 50px;
                    justify-content: center;
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

                @media screen and (max-width: 760px) {
                    .container {
                        flex-wrap: wrap;
                    }

                    .atas.kiri {
                        order: 2;
                    }
                
                    .atas.kanan img {
                        width: 250px;
                    }
                
                    .atas.kanan a i {
                        font-size: 50px;
                        margin: 20px 5px;
                        color: black;
                    }
                }
                </style>
                <div class="container satu">
                    <article class="atas kiri">
                    <h1 id="myText">${pageData.title}</h1>
                    <h3 >Saya ${pageData.name}</h3><br>
                    <p>NPM saya ${pageData.nim}</p>
                    <p>Saya adalah mahasiswa <a href="${pageData.campus}" target="_blank"><span>Universitas Logistik dan Bisnis Internasional</span></a> Bandung</p>
                    <p>${pageData.prodi}</p>
                    </article>
            
                    <article id="geografis" class="atas kanan">
                        <img src="${pageData.picture}" alt="">
                            <div>
                                <a href="https://github.com/ilmanaqilaa" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100007457206009" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/ilmanaqilaa" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://id.linkedin.com/in/ilman-aqilaa-0132b9203" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                    </article>
                </div>
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
