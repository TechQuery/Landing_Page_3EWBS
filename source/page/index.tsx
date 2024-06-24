import { MainNavigator } from "../component/MainNavigator";

export const IndexPage = () => (
  <>
    <MainNavigator />

    <main className="mt-5">
      <div className="container">
        <section id="courses" className="text-center"></section>

        <section id="teachers" className="text-center">
          <h2 className="mb-5 font-weight-bold ">金牌导师阵容</h2>

          <div className="row d-flex justify-content-center mb-4">
            <div className="col-md-8">
              <p className="grey-text">
                3E女子商学院的导师均来自本土各行业拥有丰富创投经验的精英，平均相关从业行业在10年以上。
                他们在3E女子商学院的人、财、务系统课程体系设置之下，以输出带动输入的理念，将各自擅长领域的思维模式、
                实战经验指导创业女性边学边练，更快更有效的帮助大家吸收和成长，促进项目的发展和盈利。
              </p>
            </div>
          </div>

          <div className="row">
            <div className="carousel slide col-md-12" data-ride="carousel">
              <div className="carousel-inner" id="teacher">
                <template>
                  <div className="carousel-item ${view.index ? 'active' : ''}">
                    <div className="card-deck" data-view="teachers">
                      <template>
                        <div className="card card-cascade mb-1">
                          <img
                            src="img/teachers/${view.avatar}"
                            alt="teacher photo"
                            className="img-fluid"
                          />
                          {/* <h4
                            className="card-title my-4 font-weight-bold "
                            hidden="${!view.name}"
                          >
                            ${view.name}
                          </h4>
                          <p className="py-2" hidden="${!view.title}">
                            ${view.title}
                          </p> */}
                        </div>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="text-center">
          <hr className="my-5" />

          <h2 className="mb-5 font-weight-bold ">精彩活动</h2>

          <video
            className="video-fluid z-depth-1"
            loop
            controls
            autoplay
            poster="img/poster.jpeg"
          >
            <source
              src="https://media.githubusercontent.com/media/Akagilnc/Landing_Page_3EWBS/master/video/12.16%E8%87%B3%E5%8B%87%E6%96%B0%E7%94%9F.ogg"
              type="video/ogg"
            />
          </video>
        </section>

        <hr className="my-5" />

        <section id="students">
          <h2 className="mb-5 font-weight-bold text-center">明星学员</h2>

          <div id="student" className="card-deck">
            <template>
              <div className="card card-cascade col-lg-4 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="img/students/${view.avatar}"
                    className="img-fluid"
                    alt="student photo"
                  />
                  <div className="mask rgba-black-strong"></div>
                </div>

                <h4 className="card-title my-3 font-weight-bold">
                  {/* ${view.name} */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MzY0NDQxMg==&scene=126&bizpsid=0#wechat_redirect"
                  >
                    <i className="fab fa-weixin"></i>
                  </a>
                </h4>
                {/* <p className="grey-text">${view.title}</p>
                <p className="grey-text">${view.desc}</p> */}
              </div>
            </template>
          </div>
        </section>

        <hr className="my-5" />

        <section id="gallery">
          <h2 className="mb-5 font-weight-bold text-center">课程介绍</h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                id="carousel-example-1z"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-1z"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                  <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <a href="https://na6pe3xlrb1jajy5.mikecrm.com/q19wZQs">
                      <img
                        className="d-block w-100"
                        src="img/events/官网-招募.jpg"
                        alt="First slide"
                      />
                    </a>
                  </div>

                  <div className="carousel-item">
                    <a href="https://www.baidu.com/s?wd=李许珊珊">
                      <img
                        className="d-block w-100"
                        src="img/events/官网banner创始人.jpg"
                        alt="Second slide"
                      />
                    </a>
                  </div>

                  <div className="carousel-item">
                    <a href="https://mp.weixin.qq.com/s/xfqLOw6o8h6slB8bXV2T2w">
                      <img
                        className="d-block w-100"
                        src="img/events/官网集锦.jpeg"
                        alt="Third slide"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <a href="" className="teal-text">
                <h6 className="pb-1">
                  <i className="fas fa-school"></i>
                  <strong> 初创女性训练营 </strong>
                </h6>
              </a>
              <h4 className="mb-3 font-weight-bold">
                <strong>你将获得</strong>
              </h4>
              <p>
                基于人，财，务，从0到1系统的创业项目梳理
                <br />
                提升对个人和创业认知，全局观创业
                <br />
                少走弯路，降低经验不足带来的时间和资金成本
                <br />
                确定个人创业优势，提升个人综合实力
                <br />
                清晰的品牌定位和推广思路
                <br />
                建立商业闭环，更快实现盈利
                <br />
                个人魅力和创业项目，在1000人大会上的展示机会
                <br />
                志同道合的伙伴，让成长路上不孤单
              </p>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section id="contact">
          <h2 className="mb-5 font-weight-bold text-center">联系我们</h2>

          <div className="row">
            <div className="col-lg-5 col-md-12 text-center">
              <h4>咨询小助手获得了解更多</h4>
              <img src="img/as_qrcode.jpeg" className="img-fluid h-75" />
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                id="container"
                className="z-depth-1-half map-container mb-5"
                style={{ height: "400px" }}
              />
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-12 mb-3">
              <p>
                <i className="fas fa-map fa-1x mr-2 grey-text"></i>成都, 四川
                中国
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <p>
                <i className="fas fa-building fa-1x mr-2 grey-text"></i>Mon -
                Fri, 10:00-19:00
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <p>
                <a href="tel:+8617308077367">
                  <i className="fas fa-phone fa-1x mr-2 grey-text"></i>+86 173
                  0807 7367
                </a>
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-3">
              <a href="http://www.beian.miit.gov.cn">蜀ICP备19022231号</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
);
