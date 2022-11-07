import { ref } from 'vue'

export default function useUpload() {
    let fileList = ref([
        {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
    ])

    let dialogImageUrl = ref('')
    let istrueVisible = ref(false)

    let handleRemove = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
    }

    let handlePictureCardPreview = (uploadFile) => {
        dialogImageUrl.value = uploadFile.url
        istrueVisible.value = true
    }

    return {
        fileList,
        dialogImageUrl,
        istrueVisible,
        handleRemove,
        handlePictureCardPreview
    }
}
