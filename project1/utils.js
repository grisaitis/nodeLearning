/* taken from 
	http://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
*/

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}

exports.objToString = objToString;
