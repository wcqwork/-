<template>
    <div v-if="data.length">
        <water-fall gap="0px" width="340px" class="container" :data="data" :delay="true">
            <template #default="item">
                <div class="card card-tem">
                    <div class="chooseBtn">
                        <span class="chooseTempBtn" @click="handlerChooseTemp(item.encodeId)">使用模板</span>
                        <span class="chooseTempView" @click="showBigImage(item.previewUrl)">
                            <svg-icon name="查看" className="查看" size="20"></svg-icon>
                        </span>
                    </div>
                    <img class="img" :src="item.previewUrl || ''" />
                </div>
            </template>
        </water-fall>

        <!-- <button class="halo-btn halo-btn-primary" @click.stop.prevent="loadMore">加载更多</button> -->
        <show-picture :visible="photoVisible" :url="bigImgUrl" @closeClick="
            () => {
                photoVisible = false;
            }
        "></show-picture>
    </div>
</template>

<script>
import WaterFall from 'kuan-vue-waterfall';
import photoSwipe from 'kuan-vue-photoswipe';
import showPicture from '@/components/showPicture'
import { getSetting, setUpload, saveSetting, getComponentSetting, getCommentList } from "@/api/manger/setupApi"

export default {
    components: {
        WaterFall,
    },
    data() {
        return {
            payload: {
                page: 1,
                size: 18,
            },
            total: 0,
            data: [],

            photoVisible: false,
            bigImgUrl: ""
        };
    },
    computed: {
        hasMore() {
            const { page, size } = this.payload;
            return page * size < this.total;
        },
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        preview(url, e) {
            const { width, height } = e.target;
            photoSwipe.preview(width ? [{ previewUrl: url, w: width, h: height }] : url);
        },
        async fetchData() {
            const { page, size } = this.payload;
            const prev = (page - 1) * size;
            getCommentList().then(res => {
                // const images = [
                //     {
                //         "encodeId": "WifApKUfKnPQ",
                //         "appName": "ceshi1",
                //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/lkBqmKmiSRmkmrjlqnk/moban.png"
                //     },
                //     {
                //         "encodeId": "WifApKUfKnPQ",
                //         "appName": "ceshi1",
                //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/ljBqmKmiSRmkmrjlonk/mb.png"
                //     }, {
                //         "encodeId": "WifApKUfKnPQ",
                //         "appName": "ceshi1",
                //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/lkBqmKmiSRmkmrjlqnk/moban.png"
                //     },
                //     {
                //         "encodeId": "WifApKUfKnPQ",
                //         "appName": "ceshi1",
                //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/ljBqmKmiSRmkmrjlonk/mb.png"
                //     },
                // ];
                if (res != 'error') {
                    const images = res;
                    // const images = [...Array(this.payload.size).keys()].map((key) => ({
                    //     key: key + 1 + prev,
                    //     previewUrl: require(`./images/${key}.jpg`),
                    // }));
                    console.log(images);
                    this.total = 500;
                    this.data = [...this.data, ...images];
                }
            })

        },
        loadMore() {
            if (this.hasMore) {
                this.payload.page += 1;
                this.fetchData();
            }
        },
        showBigImage(imgUrl) {
            if (imgUrl != "") {
                this.photoVisible = true;
                this.bigImgUrl = imgUrl;
            }
        },
        handlerChooseTemp(encodeId) {
            this.$emit('testhandlerChooseTemp', encodeId);
        }
    },
};
</script>

<style lang="scss">
body {
    background-color: #f2f3f8;
}

.container {
    min-height: 75vh;
}

.card {
    padding: 10px;
    background-color: white;
    border-radius: 3px;
    color: #666;
    line-height: 1.5;
    word-break: break-all;

    .img {
        width: 100%;
        margin-bottom: 5px;
        cursor: pointer;
    }
}

.halo-btn {
    margin: 100px auto;
    display: block;
}


.card-tem {


    &:hover .chooseBtn {
        display: flex;
    }

    &:hover::before {
        content: "";
        width: calc(100% - 20px);
        height: calc(100% - 30px);
        position: absolute;
        display: inline-block;
        background-color: rgba($color: #000000, $alpha: 0.6);
    }

    .chooseBtn {
        display: none;
        align-items: center;
        padding: 14.3px 17.18px;

        position: absolute;
    }

    .chooseTempBtn {
        width: 105px;
        height: 40px;
        background: #008cff;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        font-weight: 400;
        color: #ffffff;


        cursor: pointer;
    }

    .chooseTempView {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #ffffff;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 10px;
        cursor: pointer;
    }
}
</style>