# SelectOption - Handy way to select options.
Plugin select single/ multiple options of select element with provided datasource. Currently plugin supports three sources i.e single value, array, Json object.

## Parameters 
    - datasource  : singlevalue, array, json.
    - data        : Data that need to be selected.
    - comparewith : Attrbiute of json object that will be used to compare with element value.

## Example 1
```javascript
$("select").Selectoptions({data:[2]})

or 

$("select").Selectoptions({data:2})
```

## Example 2
```javascript
$("select").Selectoptions({data:[1,2]})
```

## Example 3
```javascript
$("select").Selectoptions({comparewith: "label",datasource:"json",data:[{label:"1",Caption:"One"},{label:"3",Caption:"Three"}]})
```
