import { ref } from "vue";

export default function useEditArticle(){
    let articleId = ref(null);
    let editArticleVisible = ref(false)
    let articleTitleArea = ref('');
    let articleContentArea = ref('');

    let handlerEditArticleCalc = () => {
        editArticleVisible.value = false
        articleId.value = null;
    }

    let handlerEditArticleOk = (handlerUpdate) => {
        handlerUpdate();
        handlerEditArticleCalc();
    }

    let handlerEditDialog = (obj) => {
        let {articleTitle,articleContent} = obj;
        articleTitleArea.value = articleTitle;
        articleContentArea.value = articleContent;
        editArticleVisible.value = true;
    }

    return {
        articleId,
        editArticleVisible,
        articleTitleArea,
        articleContentArea,
        handlerEditArticleCalc,
        handlerEditArticleOk,
        handlerEditDialog
    }
}