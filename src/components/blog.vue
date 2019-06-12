<template>
  <div>
    <!-- navbar 開始 -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-info">
      <a class="navbar-brand" href="#">
        <i class="far fa-star"></i> XII Constellations
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">Blog</a>
        </div>
      </div>
    </nav>
    <!-- 外層 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 側邊攔 -->
        <div class="col-xl-1 col-md-2 pl-0">
          <table class="table table-hover text-info text-center">
            <thead>
              <tr>
                <th>12星座</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#" class="text-info">牡羊座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">金牛座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">雙子座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">巨蟹座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">獅子座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">處女座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">天秤座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">天蠍座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">射手座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">魔羯座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">水瓶座</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" class="text-info">雙魚座</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 主頁面 -->
        <div class="col-md-9">
          <!-- 麵包屑 -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#" class="text-info">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#" class="text-info">Library</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#" class="text-info">Data</a>
              </li>
            </ol>
          </nav>

          <!-- 文字 -->
          <h1 class="text-info">星座涵意</h1>

          <div class="row">
            <div class="col-md-8">
              <small>
                <span class="text-secondary mr-2 my-2">
                  <i class="fas fa-user-edit mr-1"></i>Diff
                </span>
                <span class="text-secondary mr-2 my-2">2019/5/30</span>
                <span>
                  <a href="#" class="badge badge-success mr-2 my-2">
                    <i class="fas fa-tag"></i> 星座
                  </a>
                </span>
              </small>
              <!-- 星座解釋 article 文章部分-->
              <article>
                <div class="mt-3">
                  <h4 class="text-info">星座介紹</h4>
                </div>
                <div class="pl-4">
                  <p>星座是指天上一群群的恆星組合。自從古代以來，人類便把三五成群的恆星與他們神話中的人物或器具聯繫起來，這些迷思的綜合稱之為「星座」。星座幾乎是所有文明中確定天空方位的手段，在航海領域應用頗廣。對星座的劃分完全是人為的，不同的文明對於其劃分和命名都不盡相同。星座一直沒有統一規定的精確邊界，直到1930年，國際天文學聯合會為了統一繁雜的星座劃分，用精確的邊界把天空分為88個正式的星座，使天空多數恆星都屬於某一特定星座。這些正式的星座大多都以中世紀傳下來的古希臘傳統星座為基礎。與此相對地，有一些廣泛流傳但是沒有被認可為正式星座的星星的組合叫做星群，例如北斗七星（參見恆星統稱列表）。</p>
                </div>
                <div class="mt-5">
                  <h4 class="text-info">星座的起源</h4>
                </div>
                <div class="pl-4">
                  <p>為了方便研究及觀測天上諸多恆星，人們把星空分為若干個區域，每一區就是一個星座。很難確切的說出人類是從何時開始有星座的概念的，這類天文知識遠在有歷史記載以前就被人們所領會。星座的名稱則很可能來源於早期航海的水手。不同地域的文明中，星座的起源可能完全不同，但是隨著各文明的擴張和相互影響，星座的文化也包含了融合的過程。</p>
                </div>
                <!-- 星座圖片 加上class="img-fluid" -->
                <img
                  class="img-fluid"
                  src="https://www.soeasyedu.com.tw/updimg/blog_content/810001/810001.jpg"
                  alt
                >
              </article>
              <!-- 12星座表格 -->
              <div class="table-responsive-sm">
                <table class="table text-primary text-center mt-5">
                  <thead>
                    <tr>
                      <th width="30%">12星座</th>
                      <th>星座日期</th>
                      <th width="25%">節氣</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>牡羊座</td>
                      <td>3月21日~4月20日</td>
                      <td>春分</td>
                    </tr>
                    <tr>
                      <td>金牛座</td>
                      <td>4月21日~5月20日</td>
                      <td>榖雨</td>
                    </tr>
                    <tr>
                      <td>雙子座</td>
                      <td>5月21日~6月20日</td>
                      <td>小滿</td>
                    </tr>
                    <tr>
                      <td>巨蟹座</td>
                      <td>6月21日~7月22日</td>
                      <td>夏至</td>
                    </tr>
                    <tr>
                      <td>獅子座</td>
                      <td>7月23日~8月22日</td>
                      <td>大暑</td>
                    </tr>
                    <tr>
                      <td>處女座</td>
                      <td>8月23日~9月22日</td>
                      <td>處暑</td>
                    </tr>
                    <tr>
                      <td>天秤座</td>
                      <td>9月23日~10月22日</td>
                      <td>秋分</td>
                    </tr>
                    <tr>
                      <td>天蠍座</td>
                      <td>10月23日~11月22日</td>
                      <td>霜降</td>
                    </tr>
                    <tr>
                      <td>射手座</td>
                      <td>11月23日~12月22日</td>
                      <td>小雪</td>
                    </tr>
                    <tr>
                      <td>魔羯座</td>
                      <td>12月23日~1月21日</td>
                      <td>冬至</td>
                    </tr>
                    <tr>
                      <td>水瓶座</td>
                      <td>1月22日~2月19日</td>
                      <td>大寒</td>
                    </tr>
                    <tr>
                      <td>雙魚座</td>
                      <td>2月20日~3月20日</td>
                      <td>雨水</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 卡片留言區  card  Header and footer -->
              <div class="card mt-3">
                <div class="card-header">留言區</div>
                <div class="card-body">
                  <!-- media內容 -->
                  <div class="media mb-3">
                    <img
                      src="https://img.gmz88.com/uploadimg/ico/2018/0117/1516173430628278.jpg"
                      class="mr-3"
                      wight="64"
                      height="64"
                    >
                    <div class="media-body">
                      <h5 class="mt-0">訪客</h5>
                      <!-- from 表單 textarea + btn -->
                      <form>
                        <div class="form-group">
                          <textarea class="form-control" rows="3"></textarea>
                          <button class="btn btn-light btn-block mt-2">我要留言</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="media">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9_JWvHaoLNTPQngySUVa6uTsxTeOywwYxPrv0E2Stgd509Jyrw"
                      class="mr-3"
                      wight="64"
                      height="64"
                    >
                    <div class="media-body">
                      <h5 class="mt-0">波卡</h5>謝謝分享，星座真的是們有趣的學問！
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右邊 col4 區塊 -->
            <div class="col-md-4">
              <h2 class="text-secondary mr-2 my-2">Tags</h2>
              <!-- 使用 badges 的 link 元件-->
              <span>
                <a href="#" class="badge badge-success">
                  <i class="fas fa-tag"></i> 星座
                </a>
              </span>
              <span>
                <a
                  href="https://zh.wikipedia.org/wiki/%E6%98%9F%E5%BA%A7"
                  target="_blank"
                  class="badge badge-success"
                >
                  <i class="fas fa-tag"></i> 維基百科
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footer class="bg-info py-4 mt-3 text-white">
      <div class="container d-flex justify-content-between">
        <div>
          <i class="far fa-copyright"></i> 12星座部落格
        </div>
        <div>
          <a href="#" class="text-white">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-white">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-white">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>