<template>
    <div class="container">
        <section id="seminar-schedule" class="sec sec__seminar--schedule">
            <div class="container__inner">
                <div class="heading heading--left anim anim--scroll anim--left">
                    <div class="heading__inner">
                        <p class="heading__en heading__en--line">schedule</p>
                        <h2 class="heading__jp">開催スケジュール</h2>
                    </div>
                </div>
                <div class="seminarP__tab__container">
                    <div class="seminarP__scroll">
                        <ul class="seminarP__tabs seminarP__tabs--schedule  anim anim--scroll anim--bottom">
                            <li class="is-active"><span>東京(神田)</span></li>
                        </ul>
                    </div>
                    <p class="mt15 mb10 none__pc">※横スクロールでご覧いただけます</p>
                    <div class="seminarP__tab__content seminarP__tab__content--schedule is-active anim anim--scroll anim--top">
                        <div class="seminarP__scroll--sp">
                            <table class="seminarP__table seminarP__table--schedule anim anim--scroll anim--top">
                                <thead>
                                    <tr>
                                        <td class="seminarP__table__date">日程</td>
                                        <td class="seminarP__table__time2">開催時間</td>
                                        <td class="seminarP__table__venue">開催地詳細</td>
                                        <td class="seminarP__table__status">座席状況</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for='(item, i) in items' :key='i'>
                                        <td class="seminarP__table__date">{{item.日程}}</td>
                                        <td class="seminarP__table__time2">{{item.開催時間}}</td>
                                        <td class="seminarP__table__venue">
                                            <div class="seminarP__table__on">
                                                <p>詳細を見る</p>
                                            </div>
                                            <!-- ホバーで表示される部分 -->
                                            <div class="seminarP__table__content">
                                                <h3>{{item.開催地詳細}}</h3>
                                            </div>
                                            <!-- ホバーで表示される部分 ./-->
                                        </td>
                                        <td class="seminarP__table__status">{{item.空席状況}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ▼ breadcrumb ▼ -->
        <div id="breadcrumb" class="breadcrumb__container">
            <div class="container__inner">
                <ul class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="">
                            <span itemprop="name"><span class="breadcrumb__home"></span></span>
                        </a>
                        <meta itemprop="position" content="1">
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <span itemprop="name">ディープラーニングハンズオンセミナー</span>
                        <meta itemprop="position" content="2">
                    </li>
                </ul>
            </div>
        </div>
        <div id="migration" class="mig__container">
            <div class=" anim anim--scroll anim--left">
                <div class="mig__inner">
                    <h2 class="mig__heading">WEBからのお問い合わせ</h2>
                    <div class="btn--mig">
                        <div class="btn--mig__effect"></div>
                        <a href="#">CONTACT</a>
                    </div>
                    <p class="mig__time">受付時間：平日9:00 - 18:00</p>
                </div>
            </div>
            <div class="anim anim--scroll anim--left">
                <div class="mig__inner">
                    <h2 class="mig__heading">よくあるご質問</h2>
                    <div class="btn--mig">
                        <div class="btn--mig__effect"></div>
                        <a href="#">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const url = encodeURI('https://api.steinhq.com/v1/storages/5f0e824c5d3cdc44fcd7d17e/シート1')
    const { data } = await axios.get(url)
        return {
      items: data
    }
  }
}
</script>