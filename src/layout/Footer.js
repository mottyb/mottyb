const Footer = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p>
                  © 2022 - {new Date().getFullYear()} כל הזכויות שמורות לשטרן משכנתאות
                </p>
              </div>
            </div>
            <div className="col">

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
