const Footer = (props) => {
  return (
    <footer class="footerbar">
      <div class="carousel">
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/61/63/27/616327f7c9a71426b5a01f543fe9257a.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/39/73/84/39738440efff0e25542f99321f7ff49b.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/4e/00/60/4e00601722048c543c04d1e24c877be7.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/ad/2d/c4/ad2dc4013469e8eb394913997c36414e.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/30/6a/32/306a32717eea573f89bf9fe35563461f.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/564x/8c/21/0d/8c210dcaa49342561e900ecd335a1691.jpg" />
        </a>
        <a href="#" class="gallery">
          <img src="https://i.pinimg.com/736x/49/f8/29/49f8299293b465c61167b30bd808c82d.jpg" />
        </a>
      </div>

      <div class="footer-icons">
        <ul class="footer-wrap">
          <li>
            <a
              href="https://www.facebook.com/Vogue"
              class="fa fa-facebook"
              target="_blank"
            >
              {' '}
              Facebook{' '}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vogue/?hl=en"
              class="fa fa-instagram"
              target="_blank"
            >
              {' '}
              Instagram{' '}
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Vogue"
              class="fa fa-youtube"
              target="_blank"
            >
              {' '}
              YouTube{' '}
            </a>{' '}
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
