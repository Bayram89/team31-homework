function insertSiteTitle() {
    const siteTitle = document.createElement("header");
    siteTitle.classList.add("site-header");
    siteTitle.innerHTML = `
      <a href="/" class="site-logo">
        <img src="./fork&flavor.png" alt="Fork&Flavor Logo" style="height: 100px; vertical-align: middle; margin-right: 10px;">
        <span>Fork&amp;Flavor</span>
      </a>
    `;
    document.body.prepend(siteTitle);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    insertSiteTitle();
  });