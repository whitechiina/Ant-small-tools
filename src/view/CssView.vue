<!-- 奇幻的css -->
<template>
    <div class="main">
        <div class="f_1">
            <dv-border-box-13 :color="['rgba(56,105,207,0)', '#4DE3F8']" backgroundColor="rgba(39,59,154,0.37)" >
              <l-t />
              <div class="content">
                <hiddenDanger :dangerCount="dangerCount" :seriesData="troubleSeriesData"></hiddenDanger>
              </div>
            </dv-border-box-13>
        </div>
    </div>
</template>

<script>
import hiddenDanger from '../components/Bellel'
export default {
    data() {
        return {
            dangerCount: 0,
            troubleSeriesData: {},
        }
    },
    components: {
        hiddenDanger
    }
}
</script>

<style lang="scss" scoped>
    .main {
        background-image: url('../../static/images/tx_bg.png');
        background-size: cover;
        position: relative;
        padding-bottom: 100px;
    }
</style>