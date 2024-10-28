// Fungsi untuk menambahkan event listener ke beberapa elemen
function addEventOnElements(elements, event, handler) {
    elements.forEach(element => {
      element.addEventListener(event, handler);
    });
  }
  
  /**
   * Element tilt effect
   */
  const tiltElements = document.querySelectorAll("[data-tilt]");
  
  // Fungsi untuk menangani tilt saat mouse bergerak
  const initTilt = function (event) {
  
    /** Mendapatkan posisi pusat dari elemen tilt */
    const centerX = this.offsetWidth / 2;
    const centerY = this.offsetHeight / 2;
  
    // Menghitung pergeseran sudut berdasarkan posisi kursor
    const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
    const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;
  
    // Menerapkan transformasi 3D menggunakan CSS
    this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY * -1}deg)`;
  }
  
  // Menambahkan event listener "mousemove" untuk mengaktifkan efek tilt
  addEventOnElements(tiltElements, "mousemove", initTilt);
  
  // Menambahkan event listener "mouseout" untuk mengatur ulang transformasi saat mouse keluar dari elemen
  addEventOnElements(tiltElements, "mouseout", function () {
    this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
  