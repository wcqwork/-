//支持采集的平台
var platformLinkRule = {
    '1688.com': "{\"detect\":\"if ((/1688\\\\.com\\\\/offer\\\\/\\\\d+\\\\.html/).test(url)) {\\n  return 'detail';\\n}\\nif ((/\\\\/page\\\\/offerlist/).test(url)) {\\n  return 'category';\\n}\\nif(/\\\\/selloffer\\\\/\\\\d+\\\\.html/){return 'sortlist';}\",\"detail\":\"if(url.indexOf('1688.com/offer') !== -1 || url.indexOf('1688.com/ci_bb') !== -1 || url.indexOf('1688.com/ci_king') !== -1 ){return true;}\",\"map\":{\"detail\":\"single\",\"category\":\"category\"}}"
};


function getLinkRule(url){
    if(!url){
        return "Invalid url...";
    }
    var rule = "";
    $.each(platformLinkRule, function(key, value) {
        if(url.indexOf(key) != -1) {
            rule = value;
            return;
        }
    });

    if(!rule){
        return "The platform does not support the collection, we will deal with as soon as possible";
    }
    return rule;
}