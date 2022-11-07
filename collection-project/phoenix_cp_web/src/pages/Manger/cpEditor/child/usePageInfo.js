import { ref } from "vue";

export default function usePageInfo() {
    let currentEdit = ref(null); //当前编辑dialog

    let bannerUrl = ref('')
    let titleContent = ref('')
    let rateval = ref(5)
    let relatedProducts = ref([])
    let randomProducts = ref([])
    let relatedArticle = ref([])
    let relatedArticle2 = ref([])
    let relatedVideo = ref([])
    let relatedVideo2 = ref([])
    let relatedComment = ref([])
    let relatedkeywords = ref([])

    let formArrActive = ref(null);
    let formArr = ref([
    ]);

    return {
        currentEdit,

        bannerUrl,
        titleContent,
        rateval,
        relatedProducts,
        randomProducts,
        relatedArticle,
        relatedArticle2,
        relatedVideo,
        relatedVideo2,
        relatedComment,
        relatedkeywords,
        formArrActive,
        formArr
    }
}