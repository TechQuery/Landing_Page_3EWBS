export const MainNavigator = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          3E女子商学院
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Nav"
          aria-controls="Nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#intro">
                课程简介
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#teachers">
                导师
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">
                精彩活动
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#students">
                明星学员
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                课程介绍
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                关于我们 & 报名咨询
              </a>
            </li>
          </ul>

          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MzY0NDQxMg==&scene=126&bizpsid=0#wechat_redirect"
              >
                <i className="fab fa-weixin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                href="https://www.weibo.com/u/6055886285?refer_flag=1001030103_"
              >
                <i className="fab fa-weibo"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="intro" className="view">
      <div className="mask rgba-black-strong">
        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-10">
              <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                <span
                  className="font-weight-normal"
                  style={{ fontSize: "xx-large" }}
                >
                  初创女性
                </span>
                <br />
                训练营
              </h2>

              <hr className="hr-light" />

              <h4 className="white-text my-4 text-left">
                通过线下为期2个月的短期训练营，与后期陪伴式的创业圈层组织、
                个人咨询服务的方式，提高女性创业者的综合能力。
              </h4>
              <a href="#contact">
                <button type="button" className="btn btn-outline-white">
                  了解更多<i className="fas fa-award ml-2"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
