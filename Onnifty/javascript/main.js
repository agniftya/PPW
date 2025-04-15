document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = card.querySelector('.card-img-top').src;
        let harga = card.querySelector('.harga').innerHTML;
        let judul = card.querySelector('.cart-text').innerHTML;
      
        console.log(`harga: ${harga}`);
    });
});
