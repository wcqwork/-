### 商品多规格选择-前端 sku 算法（排列组合）

核心要点：
1、无向图
2、邻接矩阵

```javascript
specList: [
  { title: "颜色", list: ["红色", "紫色"] },
  { title: "套餐", list: ["套餐一", "套餐二"] },	
  { title: "内存", list: ["64G", "128G", "256G"] },
];

specCombinationList: [
    { id: "1", specs: ["紫色", "套餐一", "64G"] },
    { id: "2", specs: ["紫色", "套餐一", "128G"] },
    { id: "3", specs: ["紫色", "套餐二", "128G"] },
    { id: "4", specs: ["红色", "套餐二", "256G"] }
  ],
```



![邻接矩阵](.\img\邻接矩阵.png)

![无向图](.\img\无向图.png)
