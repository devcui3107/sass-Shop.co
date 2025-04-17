document.addEventListener("DOMContentLoaded", function () {
  new Tabza("#prod-detail", {
    insertHtml: true,
    tabList: "#prod-detail__list",
    tabPanels: "#prod-detail__panels",
    activeTab: 0,
    activeClass: "active",
  });
});
