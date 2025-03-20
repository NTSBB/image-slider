document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const foregroundContainer = document.querySelector(".foreground-container");
    const sliderBar = document.querySelector(".slider-bar");

    // 마우스 이동 시 자동으로 조정되도록 이벤트 리스너 추가
    sliderContainer.addEventListener("mousemove", function (e) {
        let rect = sliderContainer.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

        foregroundContainer.style.width = percentage + "%";
        sliderBar.style.left = percentage + "%";
    });

    // 터치 이벤트 추가 (모바일 지원)
    sliderContainer.addEventListener("touchmove", function (e) {
        let rect = sliderContainer.getBoundingClientRect();
        let offsetX = e.touches[0].clientX - rect.left;
        let percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

        foregroundContainer.style.width = percentage + "%";
        sliderBar.style.left = percentage + "%";
    });
});
