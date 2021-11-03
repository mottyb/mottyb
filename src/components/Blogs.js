import Link from "next/dist/client/link";
const Blogs = () => {
  return (
    <section id="blog-1" className="wide-60 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">בלוג המוממחים שלנו ?</h2>
              {/* Text */}
              <p className="p-xl">
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול
              </p>
            </div>
          </div>
        </div>
        {/* BLOG POSTS */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* BLOG POST #1 */}
          <div className="col">
            <div id="bp-1-1" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="https://www.eytanim.net/wp-content/uploads/revslider/the7-g-business/t-img0501-1250x625.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">בלוג  |  ינואר 12, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>הפיקוח על הבנקים: יש לגבות רק עמלה תפעולית אחת בעת פירעון מוקדם של משכנתא
</a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">9 תגובות</p>
                </div>
              </div>
              {/* END BLOG POST TEXT */}
            </div>
          </div>
          {/* END  BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className="col">
            <div id="bp-1-2" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="https://www.eytanim.net/wp-content/uploads/revslider/the7-g-business/t-img0501-1250x625.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">בלוג  |  יוני 3, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>ההחזר הממוצע למשכנתא עלה מעל שכר הדירה הממוצע</a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">12 תגובות</p>
                </div>
              </div>
              {/* END BLOG POST TEXT */}
            </div>
          </div>
          {/* END  BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className="col">
            <div id="bp-1-3" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="https://www.eytanim.net/wp-content/uploads/revslider/the7-g-business/t-img0501-1250x625.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">בלוג  |  מאי 18, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>
                    הוועדה המוניטרית החליטה ב-7/10/21 להותיר את הריבית ללא שינוי ברמה של 0.1%
                    </a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">33 תגובות</p>
                </div>
              </div>
              {/* END BLOG POST TEXT */}
            </div>
          </div>
          {/* END  BLOG POST #3 */}
        </div>
        {/* END BLOG POSTS */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Blogs;
