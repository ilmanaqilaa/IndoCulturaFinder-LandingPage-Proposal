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
                <div class="row">
                <div class="col-md-6">
                    <img src="${imageURL}" alt="Gambar Perkenalan" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h1>${pageData.title}</h1>
                    <p>${description}</p>
                </div>
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
