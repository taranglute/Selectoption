/**
    Developer   : Tarang Lute
    Email id    : Tarang.lute@gmail.com.
    Description :
        Plugin select single/ multiple options of select element with provided datasource.
        Currently plugin supports three sources i.e single value, array, Json object.
    
    Parameters   :
        datasource  : singlevalue,array,json.
        data        : data to be selected.
        comparewith : Label of json object used to compare with value. 

*/
(function ($) {
    $.fn.Selectoptions = function (configurations) {
        var _settings = $.extend({
            datasource: "array",
            data: null,
            comparewith: "value"
        }, configurations);

        if (!!_settings.data) {
            if (_settings.datasource.toLowerCase() == "array") {
                $(this).val(_settings.data);
            } else if (_settings.datasource.toLowerCase() == "json") {
                $(this).find("option").filter(function (index, _domelement) {
                    var value = $(_domelement).val();
                    if (!!value) {
                        $(_settings.data).each(function (index, dom) {
                            var jsondata = dom[_settings.comparewith];
                            if (!!jsondata && value == jsondata) {
                                $(_domelement).attr("selected", "true");
                            }
                        });
                    }
                    return true;
                });

            }
        }
        return this;
    }
} (jQuery));