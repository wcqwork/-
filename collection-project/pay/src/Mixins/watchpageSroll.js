export default {
  data() {
    return {
      isFixd: true
    }
  },
  methods: {
    handleScroll () {
      //获取滚动时的高度
      // let scrollTop = document.getElementById('rightContainer').scrollTop;
      // // 
      // // console.log(scrollTop)
      // this.isFixd = false
      // if (scrollTop > 73) {
      //   //滚动大于0的时候要做的操作
      //   // this.$refs.topContainer.addClass()
      //   this.isFixd = true
      // }
    }
  },
  mounted () {
    document.getElementById('rightContainer').scrollTop = 0
    // console.log(5555)
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}