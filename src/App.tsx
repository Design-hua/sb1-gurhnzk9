import React from 'react';

function App() {
  return (
    <div>
      {/* Navigation Header */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-text">
              <span className="logo-chinese">大华国际教育</span>
              <span className="logo-english">Dahua Global Education</span>
            </div>
          </div>
          
          <ul className="nav-menu" id="nav-menu">
            <li><a href="#home" className="nav-link">首页</a></li>
            <li><a href="#malaysia" className="nav-link">马来西亚留学</a></li>
            <li><a href="#universities" className="nav-link">院校推荐</a></li>
            <li><a href="#services" className="nav-link">申请服务</a></li>
            <li><a href="#testimonials" className="nav-link">成功案例</a></li>
            <li><a href="#about" className="nav-link">关于我们</a></li>
          </ul>

          <div className="nav-actions">
            <button className="cta-button">免费咨询</button>
            <select className="language-switch">
              <option value="zh">中</option>
              <option value="en">EN</option>
            </select>
          </div>

          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">开启您的马来西亚精英教育之旅</h1>
            <p className="hero-subtitle">专业申请指导 · 高录取保障</p>
          </div>
          
          <div className="hero-search">
            <div className="search-box">
              <input type="text" placeholder="输入专业/学校名称..." className="search-input" />
              <button className="search-button">搜索</button>
            </div>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <span>费用透明</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <span>本地团队</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛂</div>
              <span>签证保障</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <span>奖学金资源</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="features" id="malaysia">
        <div className="container">
          <h2 className="section-title">为什么选择马来西亚留学？</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">💰</div>
              <h3>费用低廉</h3>
              <p>年均学费3-5万，工薪家庭首选，性价比极高的留学目的地</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🌏</div>
              <h3>文化相近</h3>
              <p>华人社区完善，快速适应环境，语言文化障碍最小</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🎓</div>
              <h3>名校直通</h3>
              <p>QS500强大学保录取通道，学历全球认可度高</p>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="universities" id="universities">
        <div className="container">
          <h2 className="section-title">马来西亚顶尖合作院校</h2>
          
          {/* Public Universities */}
          <div className="university-category">
            <h3 className="category-title">公立大学 (Public Universities)</h3>
            <div className="university-grid">
              <div className="university-card" data-university="malaya">
                <div className="university-header">
                  <h4>马来亚大学 (University of Malaya)</h4>
                  <span className="university-rank">QS世界排名 #60 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚历史最悠久的大学，享有"马来西亚牛津"美誉，在医学、工程、法律等领域享有盛誉。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约2-4万人民币/年</li>
                      <li>硕士：约3-6万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分80%以上，雅思6.0-6.5</li>
                      <li>硕士：学士学位，CGPA 3.0以上，雅思6.5-7.0</li>
                      <li>热门专业：医学、工程、商科、法律</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="putra">
                <div className="university-header">
                  <h4>博特拉大学 (Universiti Putra Malaysia)</h4>
                  <span className="university-rank">QS世界排名 #148 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">以农业和林业为起家，现已发展成综合性研究型大学，在农业科学、兽医学等领域世界领先。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约1.5-3万人民币/年</li>
                      <li>硕士：约2-5万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分75%以上，雅思6.0</li>
                      <li>硕士：学士学位，CGPA 2.75以上，雅思6.5</li>
                      <li>热门专业：农业、兽医、工程、商科</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="kebangsaan">
                <div className="university-header">
                  <h4>国民大学 (Universiti Kebangsaan Malaysia)</h4>
                  <span className="university-rank">QS世界排名 #138 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚第三所公立大学，以马来语为主要教学语言，在社会科学和人文学科方面表现突出。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约1.5-3万人民币/年</li>
                      <li>硕士：约2-5万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分80%以上，雅思6.0</li>
                      <li>硕士：学士学位，CGPA 3.0以上，雅思6.5</li>
                      <li>热门专业：医学、工程、社会科学、教育</li>
                    </ul>
                  </div>
                </div>
              </div>
            
              <div className="university-card" data-university="utm">
                <div className="university-header">
                  <h4>马来西亚工艺大学 (Universiti Teknologi Malaysia)</h4>
                  <span className="university-rank">QS世界排名 #181 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚顶尖的工程和技术大学，在工程、建筑、计算机科学等领域享有国际声誉，是马来西亚工程教育的领导者。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约1.5-3万人民币/年</li>
                      <li>硕士：约2-5万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分80%以上，雅思6.0</li>
                      <li>硕士：学士学位，CGPA 3.0以上，雅思6.5</li>
                      <li>热门专业：工程、建筑、计算机科学、管理</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="usm">
                <div className="university-header">
                  <h4>马来西亚理科大学 (Universiti Sains Malaysia)</h4>
                  <span className="university-rank">QS世界排名 #146 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">以科学和技术研究闻名的综合性大学，在医学、药学、工程和自然科学领域表现卓越，拥有先进的研究设施。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约1.5-3万人民币/年</li>
                      <li>硕士：约2-5万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分80%以上，雅思6.0</li>
                      <li>硕士：学士学位，CGPA 3.0以上，雅思6.5</li>
                      <li>热门专业：医学、药学、工程、自然科学</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Private Universities */}
          <div className="university-category">
            <h3 className="category-title">私立大学 (Private Universities)</h3>
            <div className="university-grid">
              <div className="university-card" data-university="taylor">
                <div className="university-header">
                  <h4>泰莱大学 (Taylor's University)</h4>
                  <span className="university-rank">QS世界排名 #251-300 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚顶尖私立大学，以商科、酒店管理、建筑学闻名，与澳洲、英国多所名校有合作项目。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约4-8万人民币/年</li>
                      <li>硕士：约5-10万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分70%以上，雅思5.5-6.0</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思6.0-6.5</li>
                      <li>热门专业：商科、酒店管理、建筑、传媒</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="sunway">
                <div className="university-header">
                  <h4>双威大学 (Sunway University)</h4>
                  <span className="university-rank">QS亚洲排名 #251-300 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚领先的私立大学，与英国兰卡斯特大学合作，提供双学位课程，校园设施一流。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约4-7万人民币/年</li>
                      <li>硕士：约5-9万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分70%以上，雅思5.5-6.0</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思6.0</li>
                      <li>热门专业：商科、工程、心理学、传媒</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="apu">
                <div className="university-header">
                  <h4>亚太科技大学 (Asia Pacific University)</h4>
                  <span className="university-rank">计算机科学亚洲排名前100 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">专注于科技、创新和创业教育，在计算机科学、工程技术领域享有盛誉，毕业生就业率高。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约3-6万人民币/年</li>
                      <li>硕士：约4-8万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分65%以上，雅思5.0-6.0</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思6.0</li>
                      <li>热门专业：计算机科学、工程、商科、设计</li>
                    </ul>
                  </div>
                </div>
              </div>
            
              <div className="university-card" data-university="segi">
                <div className="university-header">
                  <h4>世纪大学 (SEGi University)</h4>
                  <span className="university-rank">医学专业亚洲排名前200 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">马来西亚知名私立大学，提供从预科到博士的全方位教育，与英国、澳洲多所大学合作，学费亲民，就业率高。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约3-5万人民币/年</li>
                      <li>硕士：约4-7万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分60%以上，雅思5.0-6.0</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思6.0</li>
                      <li>热门专业：商科、工程、医学、护理</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="ucsiuniversity">
                <div className="university-header">
                  <h4>赛城大学 (University College Sedaya International)</h4>
                  <span className="university-rank">工程专业亚洲排名前300 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">位于马来西亚科技走廊赛城，专注于应用科学和技术教育，与加拿大、英国大学有合作项目，校园现代化设施完善。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约3-6万人民币/年</li>
                      <li>硕士：约4-8万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分65%以上，雅思5.5-6.0</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思6.0</li>
                      <li>热门专业：工程、商科、计算机科学、生物技术</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="university-card" data-university="cityuniversity">
                <div className="university-header">
                  <h4>城市大学 (City University Malaysia)</h4>
                  <span className="university-rank">商科专业亚洲排名前400 (2025)</span>
                </div>
                <div className="university-info">
                  <p className="university-desc">以商科和管理教育见长的私立大学，提供灵活的学习模式，包括在职和全日制课程，适合不同背景的学生。</p>
                  <div className="tuition-info">
                    <h5>学费信息：</h5>
                    <ul>
                      <li>本科：约2.5-4万人民币/年</li>
                      <li>硕士：约3-6万人民币/年</li>
                    </ul>
                  </div>
                  <div className="requirements">
                    <h5>入学要求：</h5>
                    <ul>
                      <li>本科：高中毕业，均分60%以上，雅思5.0-5.5</li>
                      <li>硕士：学士学位，CGPA 2.5以上，雅思5.5-6.0</li>
                      <li>热门专业：商科、管理、会计、市场营销</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="university-carousel">
            <div className="university-track" id="university-track">
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">马来亚大学</span>
                  <span className="university-rank">QS #65</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">博特拉大学</span>
                  <span className="university-rank">QS #158</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">国民大学</span>
                  <span className="university-rank">QS #159</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">理科大学</span>
                  <span className="university-rank">QS #137</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">工艺大学</span>
                  <span className="university-rank">QS #188</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">工艺大学</span>
                  <span className="university-rank">QS #181</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">泰莱大学</span>
                  <span className="university-rank">QS #251-300</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">双威大学</span>
                  <span className="university-rank">亚洲 #251-300</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">亚太科技大学</span>
                  <span className="university-rank">计算机亚洲前100</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">世纪大学</span>
                  <span className="university-rank">医学亚洲前200</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">赛城大学</span>
                  <span className="university-rank">工程亚洲前300</span>
                </div>
              </div>
              <div className="university-item">
                <div className="university-logo">
                  <span className="university-name">城市大学</span>
                  <span className="university-rank">商科亚洲前400</span>
                </div>
              </div>
            </div>
          </div>
          <div className="visa-info">
            <h3>签证申请</h3>
            <p>获得录取通知书后，需要申请马来西亚学生签证</p>
            <a href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/" target="_blank" className="visa-link">
              前往官方签证查询系统 →
            </a>
          </div>
          
        </div>
      </section>

      {/* Application Process */}
      <section className="process" id="services">
        <div className="container">
          <h2 className="section-title">四步实现留学梦想</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>评估规划</h3>
                <p>专业评估学术背景，制定个性化留学规划方案</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>材料准备</h3>
                <p>协助准备完整申请材料，确保文件符合要求</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>院校申请</h3>
                <p>递交申请至目标院校，跟进申请进度</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>签证行前</h3>
                <p>办理学生签证，提供行前指导和接机服务</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="section-title">成功案例</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="student-info">
                <div className="student-avatar">👨‍🎓</div>
                <div className="student-details">
                  <h4>张同学</h4>
                  <span className="student-major">计算机科学专业</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"通过大华国际教育的专业指导，我成功申请到了马来亚大学计算机科学专业。老师们非常耐心，从材料准备到签证申请都给予了全程支持。"</p>
                <div className="university-achieved">
                  <span className="achievement-badge">马来亚大学 QS #60</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="student-info">
                <div className="student-avatar">👩‍🎓</div>
                <div className="student-details">
                  <h4>李同学</h4>
                  <span className="student-major">商科管理专业</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"原本担心语言成绩不够，但在老师的建议下选择了泰莱大学的预科课程，现在已经顺利升入本科。马来西亚的学习环境很棒！"</p>
                <div className="university-achieved">
                  <span className="achievement-badge">泰莱大学 QS #251-300</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="student-info">
                <div className="student-avatar">👨‍🎓</div>
                <div className="student-details">
                  <h4>王同学</h4>
                  <span className="student-major">工程专业</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"从咨询到入学只用了3个月时间，效率很高。现在在博特拉大学读工程专业，学费比欧美便宜很多，教学质量却很不错。"</p>
                <div className="university-achieved">
                  <span className="achievement-badge">博特拉大学 QS #148</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">成功案例</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">签证通过率</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">合作院校</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5年</div>
              <div className="stat-label">专业经验</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">关于大华国际教育</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>专业的马来西亚留学服务机构</h3>
              <p>大华国际教育成立于2019年，专注于为中国学生提供马来西亚留学服务。我们在吉隆坡设有办事处，拥有本地化的服务团队，能够为学生提供从申请到入学的全程支持。</p>
              
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon">🏢</div>
                  <div className="feature-text">
                    <h4>本地办公室</h4>
                    <p>在马来西亚吉隆坡设有实体办公室，提供本地化服务</p>
                  </div>
                </div>
                
                <div className="about-feature">
                  <div className="feature-icon">👥</div>
                  <div className="feature-text">
                    <h4>专业团队</h4>
                    <p>拥有丰富经验的留学顾问和当地华人团队</p>
                  </div>
                </div>
                
                <div className="about-feature">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-text">
                    <h4>院校合作</h4>
                    <p>与马来西亚多所知名大学建立了良好的合作关系</p>
                  </div>
                </div>
                
                <div className="about-feature">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-text">
                    <h4>服务保障</h4>
                    <p>提供签证保障服务，不成功不收费</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="office-icon">🏢</div>
                  <p>吉隆坡办公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>大华国际教育</h3>
              <p>专注马来西亚留学服务，为中国学生提供专业的留学咨询和申请服务。我们拥有丰富的经验和本地资源，致力于帮助每位学生实现留学梦想。</p>
              <div className="certification">
                <span className="cert-badge">教育部认证</span>
              </div>
            </div>
            <div className="footer-section">
              <h3>快速链接</h3>
              <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#malaysia">马来西亚留学</a></li>
                <li><a href="#universities">院校推荐</a></li>
                <li><a href="#services">申请服务</a></li>
                <li><a href="#testimonials">成功案例</a></li>
                <li><a href="#about">关于我们</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>联系我们</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>公众号：大华留国际教育</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <span>微信：13153335866</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@dahuaedu.com</span>
                </div>
              </div>
              <div className="social-media">
                <a href="#" className="social-icon">微信</a>
                <a href="#" className="social-icon">微博</a>
                <a href="#" className="social-icon">QQ</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 大华国际教育</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;