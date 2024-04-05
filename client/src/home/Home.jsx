import React from 'react';
import "./home.css";
import img1 from "../image/services-left-dec.png"
import img2 from "../image/services-right-dec.png"
export default function Home() {
  return (
    <div>
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="owl-carousel owl-banner">
                    <div className="item header-text">
                      <h6>Welcome to Tunisia</h6>
                      <h2>
                        Explore <em>Tunisia</em> while <span>camping</span> : Live the adventure
                      </h2>
                      <p>Welcome to our campsite in Tunisia, where adventure and relaxation meet in an enchanting setting.</p>
                    </div>
                    <div className="item header-text">
                      <h6>Welcome to Tunisia</h6>
                      <h2>
                        Escape to nature in <em>Tunisia</em> : <span>Camp</span> your way
                      </h2>
                      <p>Discover the magic of Tunisia while camping: souvenirs to take with you.</p>
                    </div>
                    <div className="item header-text">
                      <h6>Welcome to Tunisia</h6>
                      <h2>
                        <em>Tunisia</em> awaits you <span>Camp</span> and uncover
                      </h2>
                      <p>Experience an unforgettable camping adventure in Tunisia, where nature meets culture.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="our-services section">
        <div className="services-right-dec">
          <img src={img2} alt="" />
        </div>
        <div className="container">
          <div className="services-left-dec">
            <img src={img1} alt="" />
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>the different types of <span>activities</span></h2>
                <span>Our Activities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img src="assets/images/acc1.png" alt="Two Girls working together" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2><em>1 . </em>Camping</h2>
                <p>Camping is a gateway to nature's embrace, where we find solace, adventure, and a true sense of freedom. It's a world where tents become our sanctuaries, campfires ignite stories, and starry nights unveil their celestial wonders. In the wilderness, we trade modern conveniences for the simplicity of life, discovering the beauty of unplugging and connecting with the untamed. Camping is where memories are woven, where we find ourselves in the midst of nature's grandeur, and where the whispers of the wild awaken our souls.</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2><span>2 . </span>Hiking</h2>
                <p>Hiking, a symphony of footsteps echoing amidst nature's grand stage. Each stride carries us closer to breathtaking vistas, hidden trails, and the untamed beauty of the wilderness. With every ascent, we conquer our limitations, embracing the rhythm of our breath and the beating of our hearts. The scent of pine fills the air, as we navigate winding paths, immersing ourselves in the harmony of the natural world. Each step unveils a new perspective, a sense of wonder, and a profound connection with the earth beneath our feet. Hiking transcends mere physical exertion; it becomes a transformative journey, where we discover not only the splendor of nature but also the strength within ourselves.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left-image">
                <img src="assets/images/acc2.png" alt="Two Girls working together" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img src="assets/images/acc3.png" alt="Two Girls working together" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2><em>3 . </em>Climbing</h2>
                <p>Climbing, a dance of strength, determination, and conquering heights. With each grip, we defy gravity's pull and ascend towards new horizons. The rock face becomes our canvas, a puzzle waiting to be solved, as we navigate its crags and crevices. The rhythmic sound of carabiners and rope echoes our progress, while the wind whispers tales of bravery and resilience. Each upward push challenges our limits, unveiling courage we never knew existed. As we reach the summit, a breathtaking panorama unfolds before our eyes, rewarding our efforts and reminding us that the greatest triumphs are born from perseverance. Climbing is not just a physical endeavor; it's a spiritual communion with the mountains, a journey of self-discovery, and an unwavering testament to the indomitable human spirit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="our-portfolio section">
        <div className="portfolio-left-dec">
          <img src="assets/images/portfolio-left-dec.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Our <em>videos</em> for places in <span>Tunisia</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <video className="w-100" autoPlay loop muted>
                <source src="video/Bizerte like you've never seen before - بنزرت كما لم ترها من قبل.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col">
              <video className="w-100" autoPlay loop muted>
                <source src="video/Jalta - Tunisia - جالطة.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <video className="w-100" autoPlay loop muted>
                <source src="video/El Kef Tunisia تونس الكاف.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.
                  <br />
                  Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
