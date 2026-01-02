async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    el.innerHTML = "";
    console.error("Failed to load:", url, res.status);
    return;
  }
  el.innerHTML = await res.text();
}

function setActiveNav(key) {
  if (!key) return;
  document.querySelectorAll(".app-nav__item").forEach(a => {
    a.classList.toggle("is-active", a.dataset.nav === key);
    if (a.dataset.nav === key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

(async function () {
  // 배너/헤더/푸터 주입
  await inject("#app-banner", "/static/common/banner.html");
  await inject("#app-header", "/static/common/header.html");
  await inject("#app-footer", "/static/common/footer.html");

  // 페이지에서 <body data-nav="page1"> 같은 방식으로 active 처리
  setActiveNav(document.body.dataset.nav);
})();
