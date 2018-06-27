
var pickFrom = '';
var dropTo = '';
var findVal = function(object, key, op, val) {
    var value;
    Object.keys(object).some(function(k) {
        if (k === key) {
            if (op === 'set') {
            	object[k] = val;	
            } else object[k] = null;
            return object;
        }
        if (object[k] && typeof object[k] === 'object') {
            object[k] = findVal(object[k], key, op, val);
        }
    });
    return object;
}
var l  = {
	_UI_TREE: {rounter: {div3:'', div1: null}},
	allowDrop: function(ev) {
	    ev.preventDefault();
	},
	drag : function(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	    pickFrom = ev.target.parentElement.id;
	    this._UI_TREE = findVal(this._UI_TREE, pickFrom, 'remove', null);
	},
	drop : function(ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    dropTo = ev.target.id;
	    this._UI_TREE = findVal(this._UI_TREE, dropTo, 'set', data);
	    console.log(this._UI_TREE);
	    ev.target.appendChild(document.getElementById(data));
	},
	
};
export default l;
