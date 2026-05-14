const routeMap = document.querySelector(".route-map img");

if (routeMap) {
  routeMap.addEventListener("load", () => {
    routeMap.classList.add("loaded");
  });
}
