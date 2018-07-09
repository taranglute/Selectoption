# Selectoption
Description :
    Plugin select single/ multiple options of select element with provided datasource.
    Currently plugin supports three sources i.e single value, array, Json object.

## Parameters 
    1. datasource  : singlevalue,array,json.
    2. data        : data to be selected.
    3. comparewith : Label of json object used to compare with value. 

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
