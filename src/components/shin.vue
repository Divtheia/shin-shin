<template>
  <div>
    <!-- header -->
    <div class="bg-secondary">
      <div class="container text-right">
        <a href="https://www.facebook.com/tw.shinshinjai/" target="_blank" class="text-white">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.facebook.com/tw.shinshinjai/" target="_blank" class="text-white">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
    <!-- navbar -->
    <div class="container"></div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a href="#">
          <img src="../../static/img/logo.png" height="48" alt>
        </a>
        <a class="navbar-brand" href="#">馨心齋香品 Shin Shin Jai</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                首頁
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >產品</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">香塔</a>
                <a class="dropdown-item" href="#">盤香</a>
                <a class="dropdown-item" href="#">臥香</a>
              </div>
            </li>
          </ul>
          <!-- 註冊與登入按鈕 & modal -->
          <form class="form-inline">
            <button
              class="btn btn-outline-primary mr-1"
              data-toggle="modal"
              data-target="#registerModal"
            >註冊</button>
            <button class="btn btn-primary" data-toggle="modal" data-target="#loginModal">登入</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- img 圖片輪播 carousel header -->
    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <!-- img 自訂 class: img-item、 bg-cover 
          使用背景: style="background-image: url()-->
          <div
            class="carousel-item active img-item bg-cover"
            style="background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/23473020_906031809543803_3968698116981613704_n.jpg?_nc_cat=105&_nc_ht=scontent.frmq1-1.fna&oh=8f9ab62af64119a03659689adade23de&oe=5D9C9FFE)"
          ></div>
          <div
            class="carousel-item img-item bg-cover"
            style="background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/49344496_1185661008247547_7043459062192668672_n.png?_nc_cat=107&_nc_ht=scontent.frmq1-1.fna&oh=2fa35b66944d48c90b1bc8cdc2ce1f63&oe=5D5902A4)"
          ></div>
          <div
            class="carousel-item img-item bg-cover"
            style="background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/40513977_1098716856941963_237264279877713920_n.jpg?_nc_cat=105&_nc_ht=scontent.frmq1-1.fna&oh=dbb9fc4a1d0de14c7b06167f19eb5ad7&oe=5D589C76)"
          ></div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
    <!-- 三欄式排版 -->
    <section class="bg-info py-5 text-white">
      <div class="row mx-3">
        <div class="col-md-4">
          <div class="mb-3">
            <i class="fab fa-asymmetrik fa-4x"></i>
          </div>
          <h2>關於</h2>
          <p>尊崇古法承製,堅持台灣在地傳產文化,以100%天然原料,製成100%無害香品 平價．人文．心生活美學 馨心齋．用心．做好香</p>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <i class="fab fa-gripfire fa-4x"></i>
          </div>
          <h2>公司簡介</h2>
          <p>馨心齋是以「遵崇古法承製，堅持在地文化，以天然原料，製成無害香品」作為產品的核心價值；並以平價．人文．心生活美學為品牌定位。</p>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <i class="fas fa-shopping-cart fa-4x"></i>
          </div>
          <h2>產品</h2>
          <p>
            傳統祭祀手工線香.小盤香(香環).手工香塔
            臥香.單方香品.香道周邊器具.香品文創.體驗課程
          </p>
        </div>
      </div>
    </section>

    <!-- 兩格式排版 使用container-fluid 
    position: relative 做相對定位-->
    <section class="container-fluid py-5 bg-light text-white" style="position: relative">
      <div class="row">
        <!-- 圖片做絕對定位 絕對定位不會占空間-->
        <div
          class="col-md-5 bg-cover"
          style="
          position: absolute; top: 0; bottom: 0;
          background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/49742720_1181642985316016_7671262648121425920_n.jpg?_nc_cat=102&_nc_ht=scontent.frmq1-1.fna&oh=ba4bec11a3b02c740b6e518448e31047&oe=5D52BD63)"
        ></div>
        <div class="container">
          <!-- 自訂 css text-md-dark 並移動至 justify-content-end-->
          <div class="row justify-content-end text-md-dark">
            <div class="col-md-7">
              <h2>真正好香</h2>
              <p>一款好的香從鼻入味、由眼觀煙，都可以讓內心獲得平靜。質優價實的產品，以及專注本業的態度，更榮獲誠品生活expo第七屆肖年頭家 - 『頭家之星』殊榮，是首間以台灣傳統製香進駐誠品通路！</p>
              <a href="#" class="btn btn-outline-info">查看更多</a>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p>The core values of Shin Shin Jai’s product are “following the heritage of traditional methods, holding fast on local cultures, using 100% natural materials, and making 100% harmless aromatic products.”</p>
                </div>
                <div class="col-md-6">
                  <p>We promise to provide affordable, human-center products and advocate for a living aesthetic that comes from the heart.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 自訂四格 -->
    <section class="container py-5">
      <div class="text-center py-3">
        <h2>良好的品質</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex mt-2">
            <div class="mr-3 text-center text-info" style="width:80px">
              <i class="fab fa-pagelines fa-4x"></i>
            </div>
            <div>
              <p>
                馨者，香氣也，不濁不亂。
                <br>心，存敬意誠，用恭敬頂真的心做每一支香。
                <br>齋，明也，清淨無穢，守戒遵道。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex mt-2">
            <div class="mr-3 text-center text-info" style="width:80px">
              <i class="fas fa-heart fa-4x"></i>
            </div>
            <div>
              <p>
                心的含義除了是製作者本身的內心自性外，
                <br>更是想提醒，焚香祝禱，重其心，香只是媒介，
                <br>最重要的是自己的本心、祈求的祝願要符合天道啊！
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex mt-2">
            <div class="mr-3 text-center text-info" style="width:80px">
              <i class="fas fa-sun fa-4x"></i>
            </div>
            <div>
              <p>
                齋這個字我特別喜愛，除了有清明無穢守戒外，
                <br>回顧自己剛創業時，因為是白手起家、素人跨域，
                <br>在家裡頂樓製香奮鬥。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex mt-2">
            <div class="mr-3 text-center text-info" style="width:80px">
              <i class="fas fa-award fa-4x"></i>
            </div>
            <div>
              <p>
                ＃回顧張創業初期的製香場景
                <br>＃沒有這裡就沒有馨心齋
                <br>＃繼續前進
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 地圖與表格 -->
    <section>
      <div class="container-fluid bg-light">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9041814379348!2d120.68483861536788!3d24.17509297833543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917c2f3cc6c87%3A0xb6beb24bbcc68848!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5peF6aCG6Lev5LqM5q61NzPomZ8!5e0!3m2!1szh-TW!2stw!4v1559636522837!5m2!1szh-TW!2stw"
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6">
              <!-- 輸入驗證的 class="needs-validation" novalidate> 
              下面必須加一段 script-->
              <form class="needs-validation" novalidate>
                <div class="form-group">
                  <label for="name">姓名*</label>
                  <!-- 需驗證表格的後方加入 required -->
                  <input type="text" id="name" placeholder="姓名" class="form-control" required>
                  <!-- 驗證文字 -->
                  <div class="invalid-feedback">請輸入姓名</div>
                </div>
                <div class="form-group">
                  <label for="tel">電話*</label>
                  <input type="tel" id="tel" placeholder="聯絡電話" class="form-control" required>
                  <div class="invalid-feedback">請輸入電話</div>
                </div>
                <div class="form-group">
                  <label for="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    class="form-control"
                    required
                  >
                  <div class="invalid-feedback">Email 須包含 "@"</div>
                </div>
                <div class="form-group">
                  <label for="number">訂單編號*</label>
                  <input type="number" id="number" placeholder="編號" class="form-control" required>
                  <div class="invalid-feedback">訂單標號尚未填入</div>
                </div>
                <!-- 按鈕選項 -->
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input"
                    checked
                  >
                  <label class="custom-control-label" for="customRadio1">來店取貨</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    class="custom-control-input"
                  >
                  <label class="custom-control-label" for="customRadio2">宅配寄送</label>
                </div>
                <div class="text-right">
                  <button type="button" class="btn btn-secondary mt-2 mr-2">取消</button>
                  <button type="submit" class="btn btn-primary mt-2">送出</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 兩張圖片分隔 -->
    <section>
      <div class="container-fluid h-50">
        <div class="row">
          <div
            class="col-md-6 bg-cover"
            style="background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/14068278_668462959967357_6915512742347933346_n.jpg?_nc_cat=103&_nc_ht=scontent.frmq1-1.fna&oh=01478aa79cad1a3dd692eeb5e9f5038c&oe=5D8FD7D5)"
          >
            <div class="row">
              <div class="col-md-9 p-4 text-white">
                <div class="pb-3">
                  <small>品好香</small>
                </div>
                <h4>
                  馨心齋的香本質只是一個堅守職志的人，
                  <br>採天然的原料，用雙手努力把香做出來，
                  <br>單純的只想要把好東西傳遞給大家！
                </h4>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 bg-cover"
            style="background-image: url(https://scontent.frmq1-1.fna.fbcdn.net/v/t1.0-9/17626263_790105551136430_4311506893715074093_n.jpg?_nc_cat=108&_nc_ht=scontent.frmq1-1.fna&oh=bc38fccdf370fabb9502bd3962717208&oe=5D7F5E86)"
          >
            <div class="row">
              <div class="col-md-9 p-4 text-white">
                <div class="pb-3">
                  <small>感謝支持</small>
                </div>
                <h4>
                  一直覺得自己很幸運，也很幸福，
                  <br>雖然我們走的很慢，但我們夠堅持，夠勇敢，
                  <br>還有許多默默支持的鐵粉們，
                  <br>這就夠了！
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <div class="bg-light py-5 text-dark">
      <div class="container">
        <div class="d-inline mr-1">©馨心齋香品 Shin Shin Jai</div>
        <div class="d-inline mr-1">
          <a href="https://www.facebook.com/tw.shinshinjai/">Facebook</a>
        </div>
        <div class="d-inline mr-1">
          <a href="https://shopee.tw/shinshinjai">Shopee</a>
        </div>
      </div>
    </div>
    <!-- 註冊與登入 modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-warning text-white">
            <h5 class="modal-title" id="exampleModalLabel">註冊</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6 text-secondary">
                <small>
                  <p>
                  1.會員必須是具備完全行為能力的自然人、或合法登記的法人或團體。若會員為未成年人，應由其法定代理人閱讀、暸解、並同意會員合約之所有約定內容及其修改後之內容，始得開始使用或繼續使用本服務；如會員開始使用或繼續使用本服務，即推定其法定代理人已閱讀、暸解、並同意會員合約之所有約定內容及其修改後之內容。
                  <br>2.會員應完成註冊程序，包括填寫會員資料、以及提供註冊流程中所要求之相關文件或資料。會員欲使用本服務之所有功能者，並應依本服務當時所訂之方式完成會員認證；以一般會員身份註冊者，應完成手機認證及email認證，以法人會員身份註冊者，應完成email認證及書面認證。
                </p>
                  </small>
              </div>
              <div class="col-6">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">登入 Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    >
                    <small id="emailHelp" class="form-text text-muted">請至信箱收取認證信</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">再次輸入密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="mr-auto"
              data-toggle="modal"
              data-target="#loginModal"
              data-dismiss="modal"
            >已經有帳號</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-warning text-white">註冊</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="exampleModalLabel">登入</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email 帳號</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                >
                <small id="emailHelp" class="form-text text-muted">請輸入註冊電子信箱</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                >
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">記住我</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="mr-auto"
              data-toggle="modal"
              data-target="#registerModal"
              data-dismiss="modal"
            >還沒有註冊？</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary">登入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};

// 表單驗證的script
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
</script>