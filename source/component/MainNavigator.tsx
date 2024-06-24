export const MainNavigator = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
    <div className="container">
      <a className="navbar-brand" href=".">
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
);
