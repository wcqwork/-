# jquery input

##### 1、使用 is(':checked')方法作判断

```javascript
$("input[type='radio']").eq(1).is(':checked');
```

##### 2、获取被选中的单选框：使用 :checked 方法

```javascript
$("input[type='radio']:checked");
```

##### 3、单选input为选中状态设其属性checked为true

```javascript
$("input[type='radio']").eq(1).attr('checked',true);
```

