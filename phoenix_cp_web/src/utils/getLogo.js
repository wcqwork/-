//获取logo文字
export function getLogo(name) {
  let oldVal = "";
  if (name) {
    oldVal = name.replace("-", "").replace(" ", "").split(" ");
  }

  let newVal = "";
  try {
    if (oldVal.length > 1) {
      newVal =
        oldVal[0].charAt(0).toUpperCase() + oldVal[1].charAt(0).toUpperCase();
    } else {
      newVal = oldVal[0].charAt(0).toUpperCase();
    }
  } catch (error) {
    newVal = "";
  }
  return newVal || "";
}

//获取颜色
export function getBgColor(str) {
  if (!str) return;
  let colors = [
    "#B0BDDA",
    "#32B5FF",
    "#0BCEC2",
    "#FF814B",
    "#86A8FF",
    "#F579B5",
    "#FF6360",
    "#008CFF",
    "#F4A201",
    "#14B1CC",
  ];
  let i = toCode(str);
  return {
    backgroundColor: colors[i],
  };
  // let r, g, b;
  // r = Math.floor(Math.random() * 256);
  // g = Math.floor(Math.random() * 256);
  // b = Math.floor(Math.random() * 256);
  // return {
  //   backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
  // };
}

// 字符串加密
function toCode(str) {
  //加密字符串
  let s = str.length;
  s = s.toString();
  let sLength = s.length;
  s = s.substring(sLength, sLength - 1);
  return s; //返回这些映射的字符
}
